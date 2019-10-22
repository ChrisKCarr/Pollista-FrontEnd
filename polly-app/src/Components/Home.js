import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Poll from "./Poll";
import "./Home.css";

import PollContext from "../contexts/PollContext";

class Home extends Component {
  static contextType = PollContext;
  renderPollList = () => {
    // console.log(this.context.polls)
    return this.context.polls.map((poll) => {
      
    return <Poll pollObject={poll}/>
    })
    
  }
  render() {
    return (
      <div>
        {this.renderPollList()}
      </div>
    );
  }
}

export default Home;
