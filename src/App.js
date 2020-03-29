import React from "react";
import logo from "./images/logo.png";
import bulbs from "./images/bulbs.jpg";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./appStyle/App.css";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  state = {
    links: [
      {
        name: "Calculator",
        url: "https://niksein007.github.io/calculator/"
      },

      {
        name: "Dice Game",
        url: "https://niksein007.github.io/dicegame/"
      },

      {
        name: "Instagram clone",
        url: "https://niksein007.github.io/instagramclone/"
      }
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

  linksHandler2 = ()=> {
   this.state.display&& this.setState({
	   display:false
   })
    
  };

  render() {
    //taking the url from the link prop and passing into an iframe
    const iframes = this.state.links.map((link, index) => {
      return <iframe key={index} title={`num${index}`} src={link.url}></iframe>;
    });
    //taking the url from the link prop and passing into anchors to be used
    //in the designs

    const designs = this.state.links.map((link, index) => {
      return (
        <a key={index} href={link.url}>
          {link.name}
        </a>
      );
    });

    return (
      <div className="App">
        <BrowserRouter>
          <div className="appGrid">
            <div className="header">
              {" "}
              <Header
                linksHandler={this.linksHandler}
                linksHandler2={this.linksHandler2}
                display={this.state.display}
              />{" "}
            </div>{" "}
            <div className="section">
              {" "}
              <Section
                iframes={iframes}
                linksHandler2={this.linksHandler2}
                designs={designs}
              />{" "}
            </div>{" "}
            <div className="footer">
              {" "}
              <Footer />{" "}
            </div>{" "}
          </div>{" "}
        </BrowserRouter>{" "}
      </div>
    );
  }

			
}

export default App;
