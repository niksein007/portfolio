import React from "react";
import "./cardStyle/Card.css";

class Card extends React.Component {
  mouseEnter = e => {
    e.target.className = "hide";
    //have to select the description only in the current target
    let next = e.target.nextElementSibling
    let previous = e.target.previousElementSibling

    next.style.display = 'block'
    previous.style.display='block'
 
  }
  mouseLeave = () => { 
    //can use description here becaue the card targeted is not relevant
 let  description= document.getElementsByClassName('description')
 for (let i = 0; i < description.length; i++) {
  description[i].style.display= "none";
}

    let x = document.getElementsByClassName("hide");
    for (let i = 0; i < x.length; i++) {
      x[i].className = "show";
    }
  };

  render() {
    return (
      <div>
        <div className="card" onMouseLeave={this.mouseLeave}>
        <p className="description">
            {this.props.link.name} <span>{this.props.link.tools}</span> 
          </p>
          
          
          <img
            className="show"
            src={this.props.link.image}
            alt={this.props.link.name}
            onMouseEnter={this.mouseEnter}
          />
           
          <a className="description" href={this.props.link.url}>
            VISIT SITE{" "}
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
