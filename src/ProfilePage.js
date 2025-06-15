import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const styles = {
    container: {
      maxWidth: "500px",
      margin: "40px auto",
      padding: "24px",
      backgroundColor: "#f0f4f8",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "20px",
      fontWeight: "bold",
      textAlign: "center",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#ef4444",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "20px",
    },
  };
  const navigate = useNavigate();
  async function logout() {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    console.log("Logging out with refresh token:", refreshToken);
    if (!refreshToken) {
      console.warn("No refresh token; skipping server call.");
      localStorage.removeItem("accessToken");
      return;
    }

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/logout/",
        { refresh: refreshToken, access: accessToken },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err.response?.data || err.message);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/");
    }
  }
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      setError("User not logged in.");
      return;
    }

    axios
      .get("http://127.0.0.1:8000/api/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        setError("Failed to load profile.");
        console.error(err);
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Loading profile...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Profil Bilgileri</h2>
      <p>
        <strong>Kullanıcı Adı:</strong> {profile.username}
      </p>
      <p>
        <strong>E-Posta:</strong> {profile.email}
      </p>
      <p>
        <strong>Katılma Tarihi:</strong>{" "}
        {new Date(profile.date_joined).toLocaleDateString()}
      </p>
      <button onClick={logout} style={styles.button}>
        Çıkış Yap
      </button>
    </div>
  );
}

export default ProfilePage;
