import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Poll.css";
import PollContext from "../contexts/PollContext";

class Poll extends Component {
  static contextType = PollContext;

  render() {
    let poll = this.props.pollObject;
    return (
      <div className="PollContainer">
        <Link
          className="PollTitle"
          to={{
            pathname: `/show/${this.props.pollObject._id}`,
            state: { poll },
          }}
        >
          {this.props.pollObject.question}
        </Link>
        <h5 className="Description">{poll.description}</h5>
      </div>
    );
  }
}

export default Poll;
