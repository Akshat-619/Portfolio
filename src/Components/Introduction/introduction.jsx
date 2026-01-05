import React, { useEffect, useState } from "react";
import "./introduction.css";

const Introduction = () => {
  const fullText = "UI Developer";
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
        <span className="accent-gradient">Akshat Sharma</span> 
        </h1>
        <p className="subtitle typed">{typedText}</p>
        <p className="description">
        I build clean, scalable UI code and modern interfaces that deliver intuitive, user-friendly experiences transforming ideas into functional, visually engaging digital products.
        </p>
        <p className="quote">
        Simplifying complex problems through thoughtful UI design and clean implementation.
        </p>
        <div className="intro-buttons">
          <a href="#projects" className="btn primary-btn">View Projects</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
       <div className="scroll-down">
         <a href="#skills">&#x2193;</a>
       </div>
      </div>
    </section>
  );
};

export default Introduction;
