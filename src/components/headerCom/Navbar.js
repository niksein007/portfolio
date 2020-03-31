import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";
import "./navbarStyle/Navbar.css";

class Navbar extends React.Component {
  sticky = () => {
    //using the document must be done before the render otherwise it will retuen null
    let navbar = document.getElementById("nav");

    let sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  render() {
    //using the window object to make navbar sticky
    window.onscroll = () => {
      this.sticky(); 
    };

    return (
      <nav id="nav">
        <a href="#header" className="homeIcon" onClick={this.props.active}>
          <TiHomeOutline />
        </a>
        <div
          id="linkCon"
          className={this.props.display ? "showLinksCon" : "hideLinksCon"}
        >
          <a href="#header" className="links one " onClick={this.props.active}>
            HOME
          </a>

          <a href="#projects" className="links" onClick={this.props.active}>
            PORTFOLIO
          </a>

          <a href="#about" className="links" onClick={this.props.active}>
            ABOUT
          </a>

          <a href="#contact" className="links" onClick={this.props.active}>
            CONTACT
          </a>
        </div>

        <TiThMenu id="menu" onClick={this.props.linksHandler} />
      </nav>
    );
  }
}
export default Navbar;
