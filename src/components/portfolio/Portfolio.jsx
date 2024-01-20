import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from '../../assets/project2.png';
import IMG3 from '../../assets/project3.png';
import IMG4 from '../../assets/project4.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Data Analyzer",
    github: "https://github.com/Harsh-710/Data-Analyzer",
  },
  {
    id: 2,
    image: IMG2,
    title: "Book Store App",
    github: "https://github.com/Harsh-710/Book-Store-App",
    demo: "https://book-store-rosy-chi.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "My personal portfolio website",
    github: "https://github.com/harsh-710/Portfolio",
    demo: "https://portfolio-harsh-710.vercel.app/"
  },
  {
    id: 4,
    image: IMG4,
    title: "NexLead",
    github: "https://github.com/harsh-710/Nexlead",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                {demo ? <a
                  href={demo}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a> : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;