import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const testList = [
  {
    pollTitle: "Title1",
    body: "sadawfafarhgerg",
    options: ["Option A", "Option B"]
  },
  {
    pollTitle: "Title",
    body: "sadawfafarhgerg",
    options: ["Option A", "Option B"]
  },
  {
    pollTitle: "Title",
    body: "sadawfafarhgerg",
    options: ["Option A", "Option B"]
  },
  {
    pollTitle: "Title",
    body: "sadawfafarhgerg",
    options: ["Option A", "Option B"]
  },
  {
    pollTitle: "Title",
    body: "sadawfafarhgerg",
    options: ["Option A", "Option B"]
  },
  {
    pollTitle: "Title",
    body: "sadawfafarhgerg",
    options: ["Option A", "Option B"]
  },
  {
    pollTitle: "Title",
    body: "sadawfafarhgerg",
    options: ["Option A", "Option B"]
  }
];
class Poll extends Component {
  render() {
    let Poll = testList.map((PollObj, index) => {
      return (
        <div className="PollContainer" key={index}>
          <h2 className="PollTitle">{PollObj.pollTitle}</h2>
          <p className="Description">{PollObj.body}</p>
        </div>
      );
    });
    return <div>{Poll}</div>;
  }
}

export default Poll;
