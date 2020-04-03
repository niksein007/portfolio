import React from "react";
import "./contactStyle/Contact.css";
import TopHeader from "./TopHeader";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    success: `Your Message has been sent`
  };
  inputHandle = e => {
 
        this.setState({
          [e.target.id]:e.target.value
        })
     
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
      <div id="contact" className="contact">
        <p id="visible">C</p>

        <TopHeader heading="CONTACT" />
        <form action="https://formspree.io/nikseinjob@yahoo.com" method="POST" onSubmit={this.submitHandle}>
          <div className='forInputs'>
            {/* <label htmlFor="name">Name:</label> */}
            <input
              type="text"
              placeholder='Name'

              id="name"
              name="name"
              value={this.state.name}
              onChange={this.inputHandle}
            />

            {/* <label htmlFor="email">Email:</label> */}

            <input
            placeholder='Enter Email'
              type="email"
              id="email"
              name="_replyto"
              value={this.state.email}
              onChange={this.inputHandle}
            />

            {/* <label htmlFor="message">Message:</label> */}

            <textarea
                        placeholder='Your Message'

              id="message"
              name="messsage"
              value={this.state.message}
              onChange={this.inputHandle}
            />
          </div>
          <input type="hidden" name="_next" value="/thanks.html" />

          <input type="submit" value="Send" />
        </form>
        {/* <p>{this.state.success}</p> */}
      </div>
    );
  }
}

export default Contact;
