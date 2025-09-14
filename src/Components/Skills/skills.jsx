import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiWix } from "react-icons/si";
import "./skills.css";

const skillData = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" />, desc: "5 years experience" },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" />, desc: "Modern layouts" },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" />, desc: "Dynamic UI & Logic" },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" />, desc: "Utility-first styling" },
  { name: "React.js", icon: <FaReact color="#61DAFB" />, desc: "SPA & Components" },
  { name: "MongoDB", icon: <SiMongodb color="#00F5D4" />, desc: "NoSQL DB" },
  { name: "Express.js", icon: <SiExpress color="#00F5D4" />, desc: "Server-side APIs" },
  { name: "Angular.js", icon: <FaAngular color="#FF4D6D" />, desc: "Dynamic apps" },
  { name: "Wix", icon: <SiWix color="#FF4D6D" />, desc: "Websites & CMS" },
  { name: "DSA", icon: <FaJs color="#FF4D6D" />, desc: "Algorithms & Logic" }
];

const Skills = () => {
  const [visible, setVisible] = useState(Array(skillData.length).fill(false));

  useEffect(() => {
    skillData.forEach((_, i) => {
      setTimeout(() => {
        setVisible(v => {
          const newArr = [...v];
          newArr[i] = true;
          return newArr;
        });
      }, i * 150);
    });
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skillData.map((skill, i) => (
          <div key={i} className={`skill-card ${visible[i] ? "fade-in" : ""}`}>
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
