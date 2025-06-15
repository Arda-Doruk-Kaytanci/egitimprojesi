import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TestLink = (props) => {
  const name = props.data.name.replace(/\s+/g, "-").toLowerCase();
  return <Link to={`tests/${name}`}>{name}</Link>;
};
const styles = {
  card: {
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "20px",
    backgroundColor: "#f7f7f7",
    maxWidth: "500px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#4f46e5",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },
};

function TestsCatalogue() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  function fetchData() {
    axios
      .get("http://127.0.0.1:8000/api/tests/get")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching tests:", err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  const filteredTests = data.filter((test) =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Aradığınız testin adını girin"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          width: "300px",
        }}
      />

      <div>
        {filteredTests.map((test) => (
          <div key={test.id} style={styles.card}>
            <h3 style={styles.title}>{test.name}</h3>
            <p>
              <strong>Ders:</strong> {test.questions[0].subject}
            </p>
            <p>
              <strong>Soru Sayısı:</strong> {test.questions.length}
            </p>
            <Link
              to={`/tests/${test.name.replace(/\s+/g, "-").toLowerCase()}`}
              style={styles.link}
            >
              Teste Git →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestsCatalogue;
