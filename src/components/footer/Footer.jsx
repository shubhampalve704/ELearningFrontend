import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillProfile,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 Your E-COGNITION. All rights reserved.
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/shubham-palve-3928791b3/" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/shubhampalve704/" target="_blank">
            <AiFillGithub />
          </a>
          <a href="https://shubhampalve704.github.io/MyPortFolio/" target="_blank">
            <AiFillProfile />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
