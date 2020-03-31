import React from "react";
import "./contactStyle/Contact.css";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    success:`Your Message has been sent`
  };
  inputHandle = e => {
    let id = e.target.id;
    // console.log(id);

    switch (id) {
      case "name":
        this.setState({
          name: e.target.value
        });
        break;
      case "email":
        this.setState({
          email: e.target.value
        });
        break;
      case "message":
        this.setState({
          message: e.target.value
        });
        break;

      default:
        break;
    }
  };
  // submitHandle = e => {
  //     console.log(this.state.name);
  //     console.log(this.state.email);
  //     console.log(this.state.message);
  //     this.setState({
  //       name: "",
  //       email: "",
  //       message: ""
  //     })

  //   e.preventDefault();
  // };

  render() {
    return (
      <div id='contact'className="contact">
              <p id='visible'>C</p>

        <h2>Contact Me</h2>
        <form action="https://formspree.io/nikseinjob@yahoo.com" method="POST">
          

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.inputHandle}
          />

          <label htmlFor="email">Email:</label>

          <input
            type="email"
            id="email"
            name="_replyto"
            value={this.state.email}
            onChange={this.inputHandle}
          />

          <label htmlFor="message">Message:</label>

          <textarea
            id="message"
            name="messsage"
            value={this.state.message}
            onChange={this.inputHandle}
          />
          <input type="hidden" name="_next" value="/thanks.html" />

          <input type="submit" value="Submit" />
        </form>
    {/* <p>{this.state.success}</p> */}
      </div>
    );
  }
}

export default Contact;
