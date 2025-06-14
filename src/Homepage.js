import React from "react";
import "./styles/Homepage.css";

import SubjectLink from "./SubjectLink";
import studentImg from "./assets/student.png";
import teacherImg from "./assets/teacher.png";
import mathIcon from "./assets/matematik.png";
import bioIcon from "./assets/biyoloji.png";
import physicsIcon from "./assets/fizik.png";
import historyIcon from "./assets/tarih.png";
import helpIcon from "./assets/login.png";
import chatIcon from "./assets/ask-box.png";
import bottomLogo from "./assets/transparent-logo.png";

function Homepage() {
  return (
    <div className="homepage-container">
      <section className="homepage-main-section">
        <div className="homepage-main-2">
          <img src={studentImg} id="studentImg" alt="Bir öğrenci"></img>
        </div>
        <div className="homepage-main-1">
          <p>
            Dersify ile öğrenme <br></br> yolculuğuna <br></br> hoşgeldiniz
          </p>
          <button class="start-button">ÖĞRENMEYE BAŞLA!</button>
        </div>
        <div className="homepage-main-2">
          <img src={teacherImg} id="teacherImg" alt="Bir öğretmen"></img>
        </div>
      </section>
      <div className="empty-space"></div>
      <section className="homepage-bottom-container">
        <div className="header-div">
          <p>Öne çıkan kurslar</p>
          <img src={bottomLogo} id="bottom-logo"></img>
        </div>
        <div className="lessons-container">
          <SubjectLink
            bgColor="#38A77E"
            subjectName="Fizik"
            img={physicsIcon}
            headingTo="lessons/pyhsics"
          ></SubjectLink>
          <SubjectLink
            bgColor="#8366C5"
            subjectName="Matematik"
            img={mathIcon}
            headingTo="lessons/math"
          ></SubjectLink>
          <SubjectLink
            bgColor="#EF533F"
            subjectName="Biyoloji"
            img={bioIcon}
            headingTo="lessons/biology"
          ></SubjectLink>
          <SubjectLink
            bgColor="#F4AE1E"
            subjectName="Tarih"
            img={historyIcon}
            headingTo="lessons/history"
          ></SubjectLink>
        </div>

        <div></div>
      </section>
    </div>
  );
}

export default Homepage;
