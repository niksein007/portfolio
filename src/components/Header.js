import React from "react";

import "./headerStyle/Header.css";
import Navbar from "./headerCom/Navbar";

class Header extends React.Component {
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

        <a id='headerAnchor' href='#about'>View my work &rArr;</a>
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
