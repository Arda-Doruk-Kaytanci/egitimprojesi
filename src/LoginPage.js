import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "60px auto",
      padding: "30px",
      background: "#f1f1f1",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
    },
    title: {
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "12px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "12px",
      fontSize: "16px",
      backgroundColor: "#4f46e5",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
    error: {
      color: "red",
      fontSize: "14px",
    },
  };

  function handleLogin(e) {
    e.preventDefault(); // ✅ prevent form reload
    setErrorMsg("");

    axios
      .post("http://127.0.0.1:8000/api/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("Logged in:", res.data);
        localStorage.setItem("accessToken", res.data.access);
        localStorage.setItem("refreshToken", res.data.refresh);
        if (onLoginSuccess) onLoginSuccess();
        navigate("/");
      })
      .catch((err) => {
        const message =
          err.response?.data?.detail || "Login failed. Please try again.";
        setErrorMsg(message);
        console.error("Login failed:", message);
      });
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        {errorMsg && <p style={styles.error}>{errorMsg}</p>}
        <button type="submit" style={styles.button}>
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
