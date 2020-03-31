import React from "react";
import About from "./sectionCom/About";
import Contact from "./sectionCom/Contact";
import "./sectionStyle/Section.css";
import Projects from "./sectionCom/Projects";

const Section = props => {
  return (
    <section className="section">
      <About />
      <Projects  projects={props.projects}/>
      <Contact />
    </section>
  );
};

export default Section;
