import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Show.css";
import Nav from "./Nav";
import PollContext from "../contexts/PollContext";

class Show extends Component {
  static contextType = PollContext;
  findPoll = () => {
    if (this.context.polls) {
      let results = this.context.polls.find(obj => {
        return obj._id === this.props.match.params.id;
      });
      return results;
    }
  };

  handleChange = async (event, poll, obj) => {
    if (window.sessionStorage.jwt) {
      obj.votes += 1;
      await this.context.updatePoll(poll, "9g6hiE3ex2T");
    }
  };

  render() {
    this.poll = this.findPoll();

    if (this.poll) {
      this.options = this.poll.choices.map((obj, index) => {
        return (
          <button
            className="choices"
            onClick={e => this.handleChange(e, this.poll, obj)}
            key={index}
          >
            {obj.text} Votes: {obj.votes}
          </button>
        );
      });
      console.log(this.poll);
      return (
        <div>
          <Route component={Nav} />
          <div className="ShowCOntainer">
            <h2 className="Title">{this.poll.question}</h2>
            <p>{this.poll.description}</p>

            <div className="choiceButtons">{this.options}</div>
            <p className="User">Created By: {this.poll.user.name}</p>
            <hr />
          </div>
        </div>
      );
    }
    return (
      <div>
        <Route component={Nav} />
        <div>Loading</div>
      </div>
    );
  }
}

export default Show;
