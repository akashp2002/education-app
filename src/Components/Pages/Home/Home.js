import React from "react";
import meta from '../../../assets/img/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import './Home.css'
import Courses from "../Courses/Courses";
import Community from "../Community/Community";
import Plans from "../Plans/Plans";
import AboutUs from "../../AboutUs/AboutUs";
function Home() {
  const handleClick=()=>{
    window.open("https://www.youtube.com/channel/UCjQ_HnQ0f2ifb8AgATTRgRA")
  }
  return (
    <>
    <section>
      <div className="container">
        <div className="home-container">
          <div className="home-content">
            <h2 className="section_title">Learn Everything For Free!!!</h2>
            <p>
              Master trending Technologies With EduTech,Invest Your Time and
              return skills
            </p>
            <div className="home-btns">
              <button className="register-btn" onClick={handleClick}>Get Started</button>
              <button className="register-btn" onClick={handleClick}>Watch Now</button>
            </div>
          </div>
          <div className="home-img">
            <div className="home-img-wrapper">
            <div className="box-01">
                <div className="box-img">
                    <img src={meta}></img>
                </div>
            </div>
            <div className="whatsapp-container">
                <h5>500 + students</h5>
                <AiOutlineWhatsApp color="green"/>
            </div>
            <div className="support">
                <h5>ActiveSupport</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Courses/>
    <Community/>
    <Plans/>
    </>
  );
}

export default Home;
