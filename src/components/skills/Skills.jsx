import React from 'react'
import './skills.css'
import {
  SiCplusplus,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiExpress
} from "react-icons/si";
import { IoHardwareChip } from "react-icons/io5";
import { FaPython } from 'react-icons/fa'
import { IoMdSettings} from "react-icons/io";
import { FaWindows } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa'
import { FaRobot } from 'react-icons/fa'
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { BiObjectsHorizontalCenter } from "react-icons/bi";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Technical Profile I Have</h5>
      <h2>My Skills</h2>
      <div className="container skill_container">
        <div className="skill_cse">
          <h3>Computer Science</h3>
          <div className="skill_content">
            <article className="skill_details">
              <SiCplusplus className="skill_details-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BiObjectsHorizontalCenter className="skill_details-icon" />
              <div>
                <h4>OOPS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <IoMdSettings className="skill_details-icon" />
              <div>
                <h4>Data Structures and Algorithms</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <IoHardwareChip className="skill_details-icon" />
              <div>
                <h4>Digital Logic and Design</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <FaPython className="skill_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <FaRobot className="skill_details-icon" />
              <div>
                <h4>Machine Learning</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <FaWindows className="skill_details-icon" />
              <div>
                <h4>Data Analysis</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <FaDatabase className="skill_details-icon" />
              <div>
                <h4>DBMS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skill_web">
          <h3>Web Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <FaHtml5 className="skill_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <FaCss3Alt className="skill_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <SiJavascript className="skill_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <FaNodeJs className="skill_details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <SiExpress className="skill_details-icon" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <FaReact className="skill_details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <SiTailwindcss className="skill_details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <SiMongodb className="skill_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills