import React from "react";
import "./Courses.css";
import AI from "../../../assets/img/ai.png";
import SD from "../../../assets/img/sd.png";
import DG from "../../../assets/img/dg.png";
import Hacker from "../../../assets/img/hacking.png";

function Courses() {
  const courseData = [
    {
      title: "AI DEVELOPMENT",
      desc: "Master AI Development",
      img: AI,
    },
    {
      title: " DIGITAL MARKETING",
      desc: "Master Digital Marketing",
      img: DG,
    },
    {
      title: "SOFTWARE DEVELOPMENT",
      desc: "Master Software Development",
      img: SD,
    },
    {
      title: "CYBER SECURITY",
      desc: "Master Cyber Security",
      img: Hacker,
    },
  ];
  return (
    <div className="container course-container">
      <div className="container-top">
        <h2>Our Free Courses</h2>
        <p className="section_title">
          The Top Trending Free Courses With Free Certificates
        </p>
        <div className="course-wrapper">
          {courseData.map((course, index) => (
            <div className="course-item" key={index}>
              <span className="course-icon">
                <img src={course.img} alt="alt"></img>
              </span>
              <div className="course-content">
                <h4>{course.title}</h4>
                <p>{course.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
