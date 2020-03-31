import React from "react";
import "./projectsStyle/Projects.css";

const Projects = (props)=> {

  for (let i = 0; i < props.projects.length; i++) {
    
  }
  return (
    <div id='projects' className="projects">
      <p id='visible'>p</p>
      <h2>Projects</h2>
		<p>
      Mark Pearce an aspiring web developer kindly peruse through my project
     </p>
     
     <div id='proj' >{props.projects}</div>

     
    </div>
  );
}

export default Projects; 
