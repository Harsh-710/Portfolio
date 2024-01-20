import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaLocationArrow } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaLocationArrow className="about_icon" />
              <h5>Location</h5>
              <small>Chandigarh, India</small>
            </article>
            <article className="about_card">
              <FaSchool className="about_icon" />
              <h5>Education</h5>
              <small>Punjab Engineering College, Chandigarh</small>
            </article>
            <article className="about_card">
              <IoMdSchool className="about_icon" />
              <h5>Degree</h5>
              <small>B.Tech, ECE</small>
            </article>
          </div>
          <p>
          I am a software engineer in training, pursuing my Bachelor of Technology degree in Electronics and Communication Engineering at Punjab Engineering College. I am passionate about developing high-quality, efficient, and scalable software solutions that can make a positive impact in the world. I have experience in using React.js, Express.js, Python, and C++ for various projects in my academic career. I am a quick learner, a team player, and a detail-oriented individual. I have excellent communication skills and a strong foundation in computer science principles. I am eager to apply my knowledge and learn from experienced professionals in the field. I am open to new challenges and opportunities that will enable me to grow and contribute as a software engineer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;