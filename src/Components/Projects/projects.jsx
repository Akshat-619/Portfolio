import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [hover, setHover] = useState(false);

  const project = {
    name: "MS Demo Dashboard",
    description:
      "A dynamic dashboard showcasing data visualization and real-time updates. Built with React and modern web technologies.",
    screenshots: ["/assets/Homepage.png", "/assets/Billing.png"],
    liveLink: "https://msdemodashboard.vercel.app/",
    codeLink: "https://github.com/Akshat-619/Dashboard",
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">Featured Project</h2>
      <div
        className="project-card"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="project-image">
          <img
            src={hover ? project.screenshots[1] : project.screenshots[0]}
            alt={project.name}
          />
        </div>
        <div className="project-content">
          <span className="project-tag">Featured Project</span>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-buttons">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn live-demo"
            >
              Live Demo
            </a>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
