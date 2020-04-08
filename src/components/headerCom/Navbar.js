import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";
import "./navbarStyle/Navbar.css";

class Navbar extends React.Component {
  sticky = () => {
    //using the document must be done before the render otherwise it will retuen null
    let navbar = document.getElementById("nav");

    let sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky"); 
    }
  };

  activeRemover = () => {
    let x = document.getElementById("active");

    if (x) {
      x.id = "";
    }
  };
  //this enable the active class to update on scroll
  floatActive = () => {
    let height = window.pageYOffset;

    let home = document.getElementsByClassName("home")[0];
    let about = document.getElementsByClassName("about")[0];
    let projects = document.getElementsByClassName("projects")[0];
    let contact = document.getElementsByClassName("contact")[0];

    switch (true) {
      case height >= 0 && height <570:
        this.activeRemover();
        console.log(height);

        home.id = "active";

        break;

      case height >= 570 && height < 920:
        this.activeRemover(); 
        console.log(height);
        about.classList.add('topHeaderAbout')
        about.id = "active";

        break;

      case height >= 920 && height < 1385:
        this.activeRemover();
        console.log(height);
        projects.classList.add('topHeaderProjects')

        projects.id = "active";

        break;

      case height >= 1385:
        this.activeRemover();
        console.log(height);
        contact.classList.add('topHeaderContact')

        contact.id = "active";

        break;

      default:
        break;
    }
  };

  render() {
    //using the window object to make navbar sticky and animate the active
    window.onscroll = () => {
      this.sticky();
      this.floatActive();
      console.log(window.pageYOffset);
      
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
          <a href="#header"  className="links home " onClick={this.props.active}>
            HOME
          </a>

          <a href="#about" className="links about" onClick={this.props.active}>
            ABOUT
          </a>

          <a
            href="#projects"
            className="links projects"
            onClick={this.props.active}
          >
            PORTFOLIO
          </a>

          <a
            href="#contact"
            className="links contact"
            onClick={this.props.active}
          >
            CONTACT
          </a>
        </div>

        <TiThMenu id="menu" onClick={this.props.linksHandler} />
      </nav>
    );
  }
}
export default Navbar;
