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
  renderChoiceList = poll => {
    return poll.choices.map(obj => {
      return <button>{obj.text}</button>;
    });
  };
  render() {
    let poll = this.findPoll();

    // let poll = this.props.polls.find((poll) => poll.pollTitle === this.props.match.params.pollTitle)
    if (poll) {
      return (
        <div>
          <Route component={Nav} />
          <h2>{poll.question}</h2>
          <p>{poll.description}</p>
          <p>Created By: {poll.user}</p>
          <div>{this.renderChoiceList(poll)}</div>
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

  // render() {

  //     return (
  //       <div>
  //         <h2>{poll.name} ({poll.body})</h2>
  //         <ul>
  //           <li> {poll.options}</li>
  //           <li>{poll.choices}</li>

  //         </ul>
  //       </div>
  //     );
  //   }
  // let Poll = this.state.polls.map((PollObj, index) => {
  //     let choices = PollObj.choices.map((choices, index) => {
  //       return (
  //         <p
  //           className="choices"
  //           key={index}
  //         >{`${choices.name}: ${choices.count}`}</p>
  //       );
  //     });
  //     let buttonChoices = PollObj.choices.map((choice, index) => {
  //       return (
  //         <button
  //           className="choicesButton"
  //           key={index}
  //           onClick={this.incrementCount}
  //         >
  //           {choice}
  //         </button>
  //       );
  //     });
  //     return (
  //       <div className="PollContainer" key={index}>
  //         <div className="PollTitle">
  //           <Link to={`/show/${index}`}>{PollObj.question}</Link>
  //         </div>
  //         <p className="Description">{PollObj.body}</p>
  //         <div className="PollChoicesContainer">
  //           <span>{Poll.question}</span>
  //         </div>
  //         <div className="buttonChoicesContainer">{buttonChoices}</div>
  //       </div>
  //     );
  //   });
  //   return <div>{Poll}</div>;
}

export default Show;
