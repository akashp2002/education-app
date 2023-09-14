import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";
function Footer() {
  const handleClick=()=>{
    window.scrollTo(0,0)
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt=""></img>
              </div>
              <h2>EduTech</h2>
            </div>
            <p>
              EduTech is India's No.1 IT institute.If you are looking for a good
              IT carrer come lets Make it
            </p>
          </div>
          <div className="footer_box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li>
                <Link to='courses'  onClick={handleClick}>Our programs</Link>
              </li>
              <li>
                <Link to="services"  onClick={handleClick}>Our plans</Link>
              </li>
              <li>
                <Link to=""  onClick={handleClick}>Become a member</Link>
              </li>
            </ul>
          </div>
          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
                {" "}
                <Link to='/aboutus' onClick={handleClick}>About Us</Link>
              </li>
              <li>
                {" "}
                <Link to="/contactus">
                <a href=""  onClick={handleClick}>Contact Us</a>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="supportus"  onClick={handleClick}>Support Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
