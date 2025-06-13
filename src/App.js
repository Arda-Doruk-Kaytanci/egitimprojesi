import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-root">
      <div className="navbar-inner">
        {/* Left: Logo */}
        <div className="navbar-logo">
          <img src="https://img.icons8.com/color/96/brain.png" alt="Dersify Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text">DERSIFY</span>
        </div>
        {/* Center: Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Dersler</Link>
          <Link to="/konu-anlatimlari" className="navbar-link">Konu Anlatımları</Link>
          <Link to="/testler" className="navbar-link">Testler</Link>
        </div>
        {/* Right: Buttons */}
        <div className="navbar-buttons">
          <button className="navbar-btn">
            <img src="https://img.icons8.com/ios-filled/24/4a555c/conference-call.png" alt="Topluluk" className="navbar-btn-icon" />
            TOPLULUK
          </button>
          <button className="navbar-btn">
            <img src="https://img.icons8.com/ios-filled/24/4a555c/user-male-circle.png" alt="Giriş Yap" className="navbar-btn-icon" />
            GİRİŞ YAP
          </button>
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
