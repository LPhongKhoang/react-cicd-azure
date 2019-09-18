import React, { Component } from "react";

class About extends Component {
  state = {};
  constructor() {
    super();
    console.log("About: constructor");
  }

  render() {
    console.log("About: render");
    return (
      <div>
        <p>This is about page</p>
      </div>
    );
  }
}

export default About;
