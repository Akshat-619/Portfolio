import React, { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import "./skills.css";

const skillData = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" />, desc: "Semantic markup" },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" />, desc: "Modern layouts" },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" />, desc: "Dynamic UI & Logic" },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" />, desc: "Utility-first styling" },
  { name: "Bootstrap 5", icon: <FaBootstrap color="#7952B3" />, desc: "Responsive UI framework" },
  { name: "React.js", icon: <FaReact color="#61DAFB" />, desc: "SPA & Components" },
];

const Skills = () => {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    skillData.forEach((_, i) => {
      setTimeout(() => {
        setVisible(v => [...v, i]);
      }, i * 120);
    });
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        {skillData.map((skill, i) => (
          <div
            key={i}
            className={`skill-card ${visible.includes(i) ? "fade-in" : ""}`}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-desc">{skill.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
