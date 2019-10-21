import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Poll.css";
class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testing: [
        {
          pollTitle: "What is your fav color",
          body: "pick your fav color",
          options1: { name: "Blue", count: 3 },
          options2: { name: "Pink", count: 4 },
          options3: { name: "Green", count: 1 },
          options4: { name: "Red", count: 2 },
          choices: ["Blue", "Pink", "Green", "Red"]
        },
        {
          pollTitle: "What time do you wake up?",
          body: "choose the time closest to when you wake up.",
          options1: { name: "6am", count: 3 },
          options2: { name: "8am", count: 4 },
          options3: { name: "10am", count: 1 },
          options4: { name: "noon", count: 2 },
          choices: ["6am", "8am", "10am", "noon"]
        }
      ]
    };
    this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount(evt) {
    evt.preventDefault();
    console.log("Clicked", this.state.testing[0].options1[0]);
    //   this.setState({
    //     testing: {
    //       pollTitle: this.state.pollTitle,
    //       body: this.state.body,
    //       options: this.state.options.name,
    //       options: this.state.options.count + 1,
    //       choices: this.state.choices
    //     }
    //   });
  }
  render() {
    // this.state.testing.map(PollObj => {
    //   console.log(Object.keys(PollObj));
    // });
    // console.log(this.state.testing[0].options[0].count);
    let Poll = this.state.testing.map((PollObj, index) => {
      if (Object.keys(PollObj).includes(`option`)) {
        console.log("TRUE");
      }
    });
    console.log(Poll);
    //     return (
    //       <p
    //         className="choices"
    //         key={index}
    //       >{`${PollObj.name}: ${options3.count}`}</p>
    //     );
    //   });
    //   let buttonChoices = PollObj.choices.map((choice, index) => {
    //     return (
    //       <button
    //         className="choicesButton"
    //         key={index}
    //         onClick={this.incrementCount}
    //       >
    //         {choice}
    //       </button>
    //     );
    //   });
    //   return (
    //     <div className="PollContainer" key={index}>
    //       <div className="PollTitle">
    //         <Link to={`/${index}`}>{PollObj.pollTitle}</Link>
    //       </div>
    //       <p className="Description">{PollObj.body}</p>
    //       <div className="PollChoicesContainer">
    //         <span>{choices}</span>
    //       </div>
    //       <div className="buttonChoicesContainer">{buttonChoices}</div>
    //     </div>
    //   );
    // });
    return <div>{Poll}</div>;
  }
}
export default Poll;
