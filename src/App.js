import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import "./styles/Navbar.css";
import logoImg from "./assets/transparent-white-font-logo.png";
import profileImg from "./assets/login.png";
import communityImg from "./assets/community.png";
function Navbar() {
  return (
    <nav className="navbar-root">
      <div className="navbar-inner">
        {/* Left: Logo */}
        <div className="navbar-logo">
          <img src={logoImg} alt="Dersify Logo" className="navbar-logo-img" />
        </div>
        {/* Center: Navigation Links */}
        <div className="navbar-links">
          <Link to="/lessons" className="navbar-link">
            Dersler
          </Link>
          <Link to="/subject-explanations" className="navbar-link">
            Konu Anlatımları
          </Link>
          <Link to="/tests" className="navbar-link">
            Testler
          </Link>
        </div>
        {/* Right: Buttons */}
        <div className="navbar-buttons">
          <Link className="navbar-link-link">
            <img
              src={communityImg}
              alt="Topluluk"
              className="navbar-btn-icon"
            />
            <p className="navbar-btn-p">TOPLULUK</p>
          </Link>
          <Link className="navbar-link-link">
            <img src={profileImg} alt="Giriş Yap" className="navbar-btn-icon" />
            <p className="navbar-btn-p">GİRİŞ YAP</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Add more routes here for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
