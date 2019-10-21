import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Show.css";

class Show extends Component {
  render() {
    console.log(polls);
    let poll = this.props.polls.find(
      poll => poll.id === this.props.match.params.id
    );
    return (
      <div>
        <h2>
          {polls.name} ({polls.body})
        </h2>
        <ul>
          <li> {poll.options1}</li>
          <li> {poll.options2}</li>
          <li> {poll.options3}</li>
          <li> {poll.options4}}</li>
        </ul>
      </div>
    );
  }
}

export default Show;
