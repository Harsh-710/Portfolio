import React from "react";
import "./footer.css";
import { SiLeetcode } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        HARSH CHHACHHIA
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#achievements">Achievements</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://leetcode.com/harsh_7_10" target="_blank">
          <SiLeetcode />
        </a>
        <a
          href="https://www.linkedin.com/in/harsh-chhachhia-78095722a/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/harsh-710" rel="noreferrer" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Harsh Chhachhia: All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
