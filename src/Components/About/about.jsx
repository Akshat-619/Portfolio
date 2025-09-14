import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
            alt="Akshat Sharma"
          />
        </div>
        <div className="about-text-container">
          <p className="about-text">
            Hi, I’m Akshat Sharma, a Full Stack Developer specializing in the MERN stack. I’m passionate about building dynamic, responsive, and user-friendly web applications that solve real-world problems.
          </p>
          <p className="about-text">
            I love turning ideas into functional products — whether it’s designing a sleek UI, structuring efficient backend systems, or optimizing performance. My approach combines creativity, clean code, and problem-solving, ensuring every project I work on is both visually appealing and technically solid.
          </p>
          <p className="about-text">
            When I’m not coding, I enjoy exploring new technologies, solo traveling, and diving into research on real-life paranormal phenomena — all of which inspire my curiosity and creativity in tech.
          </p>
          <p className="about-text">
            Let’s create something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
