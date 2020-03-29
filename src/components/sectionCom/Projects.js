import React from "react";
import "./projectsStyle/Projects.css";

function Projects(props) {
  return (
    <div className="projects">
		<p>
      Mark Pearce an aspiring web developer kindly peruse throug my project
      please clik on the menu icon to see the indivial projects</p>
     <div className='ifCon'>{props.iframes}</div> 
    </div>
  );
}

export default Projects;
