import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import "./styles/Navbar.css";
import logoImg from "./assets/transparent-white-font-logo.png";
import profileImg from "./assets/login.png";
import communityImg from "./assets/community.png";
import LoginPage from "./LoginPage";
import TestCatalogue from "./TestsCatalogue";
import ProfilePage from "./ProfilePage";
import NoteCatalogue from "./NoteCatalogue";
function Navbar() {
  return (
    <nav className="navbar-root">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img src={logoImg} alt="Dersify Logo" className="navbar-logo-img" />
        </div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Ana Sayfa
          </Link>
          <Link to="/notes" className="navbar-link">
            Notlar
          </Link>
          <Link to="/tests" className="navbar-link">
            Testler
          </Link>
        </div>
        <div className="navbar-buttons">
          <Link to="/community" className="navbar-link-link">
            <img
              src={communityImg}
              alt="Topluluk"
              className="navbar-btn-icon"
            />
            <p className="navbar-btn-p">TOPLULUK</p>
          </Link>
          <Link
            to={localStorage.getItem("accessToken") ? "/profile" : "/login"}
            className="navbar-link-link"
          >
            <img src={profileImg} alt="Giriş Yap" className="navbar-btn-icon" />
            <p className="navbar-btn-p">
              {localStorage.getItem("accessToken") ? "PROFİL" : "GİRİŞ YAP"}
            </p>
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tests" element={<TestCatalogue />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notes" element={<NoteCatalogue />} />
        </Routes>
      </Router>
  );
}

export default App;
