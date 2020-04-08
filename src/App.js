import React from "react";
import logo from "./images/logo.png";
import bulbs from "./images/bulbs.jpg";
import bulbs2 from "./images/bulbs2.jpg";
import instagram from "./images/instagram.jpg";
import dice from "./images/dice.jpg";
import calculator from "./images/calculator.jpg";


import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Card from './components/sectionCom/Card'

import "./appStyle/App.css";

class App extends React.Component {
  state = {
    links: [
      {
        name: "Calculator",
        url: "https://niksein007.github.io/calculator/",
        tools:'React Js',
        image:calculator
      },

      {
        name: "Dice Game",
        url: "https://niksein007.github.io/dicegame/",
        tools:'Vanila Javascript',
        image:dice
      },

      // {
      //   name: "Instagram clone",
      //   url: "https://niksein007.github.io/instagramclone/",
      //   tools:'React Js',
      //   image:instagram
      // }
    ],

    display: false
  };
  linksHandler = () => {
    this.state.display
      ? this.setState({
          display: false
        })
      : this.setState({
          display: true
        });
  };

  switchDisplay = () => {
    //sets the display property to  always false
    this.setState({
      display: false
    });
  };

  //had to use id instead of className because the svg element does
  // not allow classname to be  modified
  active = e => {
    let anchor = document.getElementById("active");
    // if anchor is found
    if (anchor) {
      anchor.id = anchor.id.replace("active", "");
    }
    e.target.id = "active";

    this.switchDisplay();
  };

  render() {
   
    //taking the url from the link prop and passing into anchors to be used
    //in the projects

    const projects = this.state.links.map((link, index) => {
      return (
       <Card  key={index} link={link}/>
      );
    });

    return (
      <div className="App" onScroll={this.scroll}>
        <Header
          className="header"
          linksHandler={this.linksHandler}
          display={this.state.display}
          active={this.active}
          bulbs={bulbs}
          bulbs2={bulbs2}
        />
        <Section className="section" projects={projects}/>
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
