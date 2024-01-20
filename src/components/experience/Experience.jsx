import React from 'react'
import './experience.css'
import {BiCheck} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Practical Knowledge I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <article className="experience">
          <div className="experience_head">
            <h3>General Programming</h3>
          </div>
          <ul className="experience_list">
            <li>
              <BiCheck className="experience_list-icon" />
              <p>
                Proper knowledge of all major data structures in C++.
              </p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Familiar with algorithms involved in computer programming.</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Complex problem solving including competetive programming.</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>
                Regression, classification and clustering algorithms for machine
                learning.
              </p>
            </li>
            {/* <li>
              <BiCheck className="experience_list-icon" />
              <p>Experience in using command shell in Windows and Linux.</p>
            </li> */}
            <li>
              <BiCheck className="experience_list-icon" />
              <p>In-depth knowledge of OOPS concepts.</p>
            </li>
          </ul>
        </article>

        <article className="experience">
          <div className="experience_head">
            <h3>Development</h3>
          </div>
          <ul className="experience_list">
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Building full MERN stack web applications</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Designing smooth and user friendly UI-UX</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Implementing accurate functionalities in backend</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Application of multiple Node and React libraries</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Testing and debugging of code</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Responsive web design</p>
            </li>
            {/* <li>
              <BiCheck className="experience_list-icon" />
              <p>Deployment of web applications</p>
            </li> */}
          </ul>
        </article>

        <article className="experience">
          <div className="experience_head">
            <h3>Miscellaneous</h3>
          </div>
          <ul className="experience_list">
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Working in diverse teams</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Leading and managing people</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Public speaking</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Content writing</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Project management</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Event coordination</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Writing reports and academic studies</p>
            </li>
            <li>
              <BiCheck className="experience_list-icon" />
              <p>Real world problem solving</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Experience