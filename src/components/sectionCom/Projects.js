import React from "react";
import "./projectsStyle/Projects.css";
import TopHeader from './TopHeader'


const Projects = (props)=> {

  for (let i = 0; i < props.projects.length; i++) {
    
  }
  return (
    <div id='projects' className="projects">
      <p id='visible'>p</p>
      <TopHeader heading ='PROJECTS' />
		
     
     <div id='proj' >{props.projects}</div>

     
    </div>
  );
}

export default Projects; 
