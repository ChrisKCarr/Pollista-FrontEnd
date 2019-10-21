import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Poll.css";

const testList = [
  {
    pollTitle: "What is your fav color",
    body: "pick your fav color",
    options: [
      { name: "Blue", count: 3 },
      { name: "Pink", count: 4 },
      { name: "Green", count: 1 },
      { name: "Red", count: 2 }
    ],
    choices: ["Blue", "Pink", "Green", "Red"]
  },
  {
    pollTitle: "What time do you wake up?",
    body: "choose the time closest to when you wake up.",
    options: [
      { name: "6am", count: 3 },
      { name: "8am", count: 4 },
      { name: "10am", count: 1 },
      { name: "noon", count: 2 }
    ],
    choices: ["6am", "8am", "10am", "noon"]
  }
];
class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [
        {
          pollTitle: "What is your fav color",
          body: "pick your fav color",
          options: [
            { name: "Blue", count: 3 },
            { name: "Pink", count: 4 },
            { name: "Green", count: 1 },
            { name: "Red", count: 2 }
          ],
          choices: ["Blue", "Pink", "Green", "Red"]
        },
        {
          pollTitle: "What time do you wake up?",
          body: "choose the time closest to when you wake up.",
          options: [
            { name: "6am", count: 3 },
            { name: "8am", count: 4 },
            { name: "10am", count: 1 },
            { name: "noon", count: 2 }
          ],
          choices: ["6am", "8am", "10am", "noon"]
        }
      ]
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount(evt) {
    evt.preventDefault();
    let poll = this.state.polls.map(poll);
    console.log("Clicked", poll);
    // this.setState({
    //   polls: {
    //     pollTitle: this.state.pollTitle,
    //     body: this.state.body,
    //     options: this.state.options.count + 1,
    //     choices: this.state.choices
    //   }
    // });
  }

  render() {
    let Poll = this.state.polls.map((PollObj, index) => {
      let choices = PollObj.options.map((option, index) => {
        return (
          <p
            className="choices"
            key={index}
          >{`${option.name}: ${option.count}`}</p>
        );
      });
      let buttonChoices = PollObj.choices.map((choice, index) => {
        return (
          <button
            className="choicesButton"
            key={index}
            onClick={this.incrementCount}
          >
            {choice}
          </button>
        );
      });
      return (
        <div className="PollContainer" key={index}>
          <div className="PollTitle">
            <Link to={`/${index}`}>{PollObj.pollTitle}</Link>
          </div>
          <p className="Description">{PollObj.body}</p>
          <div className="PollChoicesContainer">
            <span>{choices}</span>
          </div>
          <div className="buttonChoicesContainer">{buttonChoices}</div>
        </div>
      );
    });
    return <div>{Poll}</div>;
  }
}

export default Poll;
