import React from "react";

import "./headerStyle/Header.css";
import Navbar from "./headerCom/Navbar";

class Header extends React.Component {
arrow2=()=>{
  let arrow = document.getElementById('arrow')
  arrow.classList.remove('arrow')

}
  arrow =()=>{
    let arrow = document.getElementById('arrow')

      arrow.classList.add('arrow')

 

  }
  render() {
    return (
      <header id='header'> 
          <img src={this.props.bulbs2} alt="headimg" />
        

        <div id="paragraph"> 
          <p id="one">
            Hello. i'am <span>Mark Pearce</span>.
          </p>
          <p> I am a web developer.</p>
        </div>

        <a 
        id='headerAnchor' 
        href='#about' 
        onMouseOver={this.arrow}
        onMouseOut={this.arrow2}
        
        >View my work <span id='arrow'>&rArr;</span></a>
        <Navbar
          active={this.props.active}
          linksHandler={this.props.linksHandler}
          display={this.props.display}
        />
      </header>
    );
  }
}

export default Header;
