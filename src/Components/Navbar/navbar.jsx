import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 90;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">Akshat Sharma</div>

        <ul className="navbar-links">
          <li>
            <a href="#home" className={active === "home" ? "active" : ""}>
              Home
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={active === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={active === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>

          {/* DOWNLOAD RESUME BUTTON */}
          <li>
            <a
              href="/resume/Akshat_Sharma_Resume.pdf"
              download
              className="accent-btn download-btn"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
