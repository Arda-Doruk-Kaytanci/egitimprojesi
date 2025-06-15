import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NoteCatalogue() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/notes/get")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => { 
        console.error("Error fetching notes:", err);
      });
  }, []);

  const filteredNotes = data.filter((note) =>
    note.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: "#9ABBB7",
        minHeight: "100vh",
        padding: "40px",
        boxSizing: "border-box",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#eef5f3",
            borderRadius: "20px",
            padding: "12px 18px",
            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            width: "420px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#2a3f3d"
            style={{ marginRight: "12px", flexShrink: 0 }}
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
          <input
            type="text"
            placeholder="Aradığınız notun adını girin"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontSize: "18px",
              color: "#2a3f3d",
              fontWeight: "500",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          justifyItems: "center",
        }}
      >
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            style={{
              backgroundColor: "#eef5f3",
              border: "2px solid #7da89e",
              borderRadius: "12px",
              padding: "20px",
              width: "100%",
              maxWidth: "300px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)")
            }
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#365853",
                marginBottom: "12px",
              }}
            >
              {note.name}
            </h3>
            <p>
              <strong>Ders:</strong> {note.subject}
            </p>
            <p>
              <strong>Açıklama:</strong> {note.description || "Yok"}
            </p>
            <Link
              to={`/notes/${note.name.replace(/\s+/g, "-").toLowerCase()}`}
              style={{
                display: "inline-block",
                marginTop: "12px",
                padding: "10px 16px",
                backgroundColor: "#4f716d",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#365853")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#4f716d")
              }
            >
              Notu Gör →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteCatalogue;
