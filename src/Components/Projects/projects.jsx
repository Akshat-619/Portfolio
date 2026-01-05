import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [active, setActive] = useState(0);

  const projects = [
    {
      name: "MS Demo Dashboard",
      description:
        "A modern dashboard experience focused on clarity, usability, and real-time business insights.",
      longDescription:
        "This dashboard was designed to simplify complex business data into clear, actionable visuals. It focuses on strong layout hierarchy, reusable UI components, and responsive design principles, ensuring users can quickly understand metrics, navigate features efficiently, and make informed decisions without friction.",
      screenshots: [
        "/assets/Ms-Dashboard.png",
        "/assets/Ms-Dashboard-Billing.png",
      ],
      liveLink: "https://msdemodashboard.vercel.app/",
    },
    {
      name: "Growlytics",
      description:
        "Analytics dashboard designed to track growth, performance metrics, and key insights with clarity.",
      longDescription:
        "Growlytics helps teams monitor growth and performance through intuitive charts, KPIs, and visual indicators. The UI emphasizes readability and speed, reducing cognitive load while allowing users to identify trends, measure outcomes, and act on insights with confidence.",
      screenshots: [
        "/assets/Growlytics.png",
        "/assets/Growlytics-2.jpeg",
      ],
      liveLink: "https://growlytics-five.vercel.app/",
    },
    {
      name: "Metrion",
      description:
        "A scalable admin dashboard built for monitoring metrics, trends, and system performance.",
      longDescription:
        "Metrion is designed for data-heavy environments where structure and consistency are critical. The interface uses modular components, balanced spacing, and a clean visual system to handle complex information gracefully, making it suitable for enterprise-level dashboards and long-term product growth.",
      screenshots: [
        "/assets/Metrion-Dashboard-1.png",
        "/assets/Metrion-Dashboard-2.png",
      ],
      liveLink:
        "https://metrion-dashboard-em9l.vercel.app/",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">
          Selected Projects
          <span>
            Crafted with a strong focus on UI clarity and data-driven design
          </span>
        </h2>

        <div className="showcase-layout">
          {/* LEFT COLUMN */}
          <div className="preview-column">
            <div className="preview-panel">
              <img
                key={active}
                src={projects[active].screenshots[0]}
                alt={projects[active].name}
              />
            </div>

            <div className="preview-options">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`option-card ${
                    active === index ? "active" : ""
                  }`}
                  onClick={() => setActive(index)}
                >
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="details-column">
            <h3>{projects[active].name}</h3>

            <p className="secondary-desc">
              {projects[active].longDescription}
            </p>

            <a
              href={projects[active].liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn live-demo"
            >
              Explore Live Dashboard →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
