import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Poll.css";
import PollContext from "../contexts/PollContext";

class Poll extends Component {
  static contextType = PollContext;
  colorChange = () => {
    if (this.context.user) {
      if (this.context.user.votedOn.includes(this.props.pollObject._id)) {
        return { color: "#d4d7dd" };
      } else {
        return { color: "rgb(86, 175, 226)" };
      }
    } else {
      return { color: "rgb(86, 175, 226)" };
    }
  };
  render() {
    let poll = this.props.pollObject;
    return (
      <div className="PollContainer">
        <Link
          className="PollTitle"
          style={this.colorChange()}
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
