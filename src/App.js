import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Introduction from "./Components/Introduction/introduction";
import Skills from "./Components/Skills/skills";
import Projects from "./Components/Projects/projects";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Introduction />
      <Skills />
      <Projects/>
      <About />
      <Contact />
    </div>
  );
}

export default App;
