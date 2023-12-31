import React from "react";
import './Community.css'
import tc from "../../../assets/img/tc.png";
function Community() {
    const handleClick=()=>{
        window.open('https://wa.me/+919544263223','_blank')
    }
  return (
    <div className="container">
      <div className="start-wrapper">
        <div className="start-img">
          <img src={tc} alt="alt"></img>
        </div>
        <div className="start-content">
          <h2 className="section-title">Join Our Free Tech community</h2>
          <p>
            Unlock the power of knowledge and innovation by joining Our vibrent
            and free Whatsapp Community
          </p>
          <button className="register-btn" onClick={handleClick}>Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Community;
