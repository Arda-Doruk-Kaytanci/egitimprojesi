import React from "react";
import "./styles/Homepage.css";

// Placeholder images (replace with your own assets in src/assets)
import studentImg from "./assets/student.png";
import teacherImg from "./assets/teacher.png";
import mathIcon from "./assets/matematik.png";
import bioIcon from "./assets/biyoloji.png";
import physicsIcon from "./assets/fizik.png";
import historyIcon from "./assets/tarih.png";
import helpIcon from "./assets/login.png";
import chatIcon from "./assets/ask-box.png";

function Homepage() {
  return (
    <div className="homepage-root">
      <section className="homepage-welcome">
        {/* Left illustration */}
        <div className="hidden md:flex flex-col items-center flex-1 homepage-illustration-container">
          <img
            src={studentImg}
            alt="Girl with book"
            className="homepage-illustration"
          />
        </div>
        {/* Center text */}
        <div className="flex-1 flex flex-col items-center justify-center homepage-center-text">
          <h1 className="homepage-heading">
            Dersify ile öğrenme
            <br />
            yolculuğuna
            <br />
            hoşgeldiniz!
          </h1>
          <button className="homepage-btn">ÖĞRENMEYE BAŞLA!</button>
        </div>
        {/* Right illustration */}
        <div className="hidden md:flex flex-col items-center flex-1 homepage-illustration-container">
          <img
            src={teacherImg}
            alt="Teacher with pointer"
            className="homepage-illustration"
          />
        </div>
      </section>
      {/* Dashed Border */}
      <div className="w-full border-t-4 border-dashed border-[#4a555c]" />
      {/* Search and Featured Courses */}
      <main className="homepage-main">
        <div className="homepage-searchbar">
          <span className="homepage-search-icon" role="img" aria-label="search">
            🔍
          </span>
          <input type="text" placeholder="Konuları ara" />
        </div>
        <div className="homepage-courses-header">
          <h2 className="homepage-courses-title">Öne Çıkan Kurslar</h2>
          <div className="homepage-courses-logo">
            <img
              src="https://img.icons8.com/color/96/brain.png"
              alt="Dersify Logo"
            />
            <span>DERSIFY</span>
          </div>
        </div>
        <div className="homepage-courses-grid">
            <img src={mathIcon} alt="Matematik" />
            <img src={bioIcon} alt="Biyoloji" />
            <img src={physicsIcon} alt="Fizik" />
            <img src={historyIcon} alt="Tarih" />
        </div>
        {/* Dersify logo/text in lower right */}
        <div className="homepage-corner-logo">
          <img
            src="https://img.icons8.com/color/96/brain.png"
            alt="Dersify Logo"
          />
          <span>DERSIFY</span>
        </div>
      </main>
      {/* Floating help button */}
      <div className="homepage-help-btn">
        <img src="https://img.icons8.com/color/48/help.png" alt="Help" />
        <img src="https://img.icons8.com/color/48/chat.png" alt="Chat" />
      </div>
    </div>
  );
}

export default Homepage;
