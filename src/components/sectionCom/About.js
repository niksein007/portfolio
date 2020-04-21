import React from "react";
import "./aboutStyle/About.css";
import TopHeader from './TopHeader'

const About = () => {
  return (
    <div id="about" className="about">
      <p id='visible'>A</p>
    
    <TopHeader heading ='ABOUT'/>
      <p>
        {" "}
        I am Mark Pearce a web/software developer from Manchester UK. My
        interest in coding and programing began some years back,Just before i
        was about rounding up my university education.
      </p>
      <p>
        Searching for information online lead me to websites such as
        <a href="https://www.freecodecamp.org/"> freecodecamp.org</a>,{" "}
        <a href="https://www.w3schools.com/">w3schools.com</a>, my Favourite{" "}
        <a href="#youtube">Youtube.com </a>
        which has loads of channels such as{" "}
        <a href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w/featured">
          acadmind
        </a>{" "}
        ,<a href="https://www.youtube.com/user/TechGuyWeb">Traversy media</a>{" "}
        and a whole lot more to help me in coding.
      </p>
      <p>
        I was looking to get a more personal and structured learning in
        Manchester and discovered{" "}
        <a href="https://wearecodenation.com/">Code Nation</a>. They run a
        tweleve weeks master coding boot camp for aspiring software developers.
        I have just concluded the coding boot camp and am eager to continue creating 
        responsive and dynamic website and also improve and develope new skills.
      </p>
      <p>
        I have found coding/programing to be fun(can build fantastic things),
        challenging( a comma(,) can destroy everything lol...) but in summary a
        little patience, research and asking for help form fellow student's and
        teacher's solves any problem{" "}
      </p>
    </div> 
  );
};

export default About;
