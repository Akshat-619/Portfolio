import React, { useEffect, useState } from "react";
import "./introduction.css";

const Introduction = () => {
  const fullText = "Full Stack Developer (MERN)";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);
  }, []);

  return (
    <section className="introduction" id="home">
      <div className="particle-background"></div>
      <div className="intro-content">
        <h1>
          Hi, I’m <span className="accent-gradient">Akshat Sharma</span> 👋
        </h1>
        <p className="subtitle typed">{typedText}</p>
        <p className="description">
          I craft clean code, modern designs, and user-friendly experiences. I turn ideas into scalable digital solutions blending creativity with functionality.
        </p>
        <p className="quote">
          ✨ “Turning complex problems into simple digital experiences.”
        </p>
        <div className="intro-buttons">
          <a href="#projects" className="btn primary-btn">View Projects</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
        <div className="scroll-down">&#x2193;</div>
      </div>
    </section>
  );
};

export default Introduction;
