import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Poll from "./Poll";

class Home extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Poll} />
      </div>
    );
  }
}

export default Home;
