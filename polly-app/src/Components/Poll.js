import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Poll.css";
import PollContext from "../contexts/PollContext";

class Poll extends Component {
  static contextType = PollContext;

  render() {
    let poll=this.props.pollObject
    console.log(poll);
    return (
      <div>
        <Link
          to={{
            pathname: `/show/${this.props.pollObject._id}`,
            query: {pollObject:{poll}}
          }}
        >
          {this.props.pollObject.question}
        </Link>
      </div>
    );
  }
}

export default Poll;
