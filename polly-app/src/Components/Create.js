import React, { Component } from "react";
import "./Create.css";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import "./ChoiceList.css";
import "./Create.css";
import "./ChoiceList.css";
import PollContext from "../contexts/PollContext";

class Create extends Component {
  static contextType = PollContext;
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      description: "",
      choices: [{ 0: "" }, { 1: "" }],
    };
    this.inputsNeeded = 2;
  }
  addChoices = () => {
    let choiceArr = this.state.choices;
    let i = choiceArr.length;
    for (i; i < this.inputsNeeded; i++) {
      choiceArr.push({ [i]: "" });
    }
    this.setState({ choices: choiceArr });
  };
  renderInputList = () => {
    let choiceArr = this.state.choices;
    let inputs = [];
    for (let i = 0; i < choiceArr.length; i++) {
      inputs.push(
        <li>
          <input
            type="text"
            id={i}
            name="choice"
            value={choiceArr[i][i]}
            onChange={e => this.handleChange(e)}
          />
        </li>,
      );
    }
    return inputs;
  };
  handleChange = event => {
    if (event.target.name === "choice") {
      let choiceArr = this.state.choices;
      let id = event.target.id;
      choiceArr[id][id] = event.target.value;
      this.setState({ choices: [...choiceArr] });
    } else {
      this.setState({ [event.target.id]: event.target.value });
    }
  };
  handlePlus = () => {
    this.inputsNeeded += 1;
    this.addChoices();
  };
  handleMinus = () => {
    if (this.inputsNeeded > 2) {
      let choiceArr = this.state.choices;
      choiceArr.pop();
      this.inputsNeeded -= 1;
      this.setState({ choices: [...choiceArr] });
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    let choiceArr = this.state.choices;

    let poll = { question: this.state.question };
    if (this.state.description !== "")
      poll.description = this.state.description;
    let choices = choiceArr.map((choice, i) => choice[i]);
    poll.choices = choices;
    this.context.newPoll(poll);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Route component={Nav} />
        <h1 className="Title">Create a new poll</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            <h3>Question: </h3>
            <input
              id="question"
              type="text"
              value={this.state.question}
              onChange={this.handleChange}
              name="question"
            />
          </label>
          <br></br>
          <label>
            <h3>Description: (optional)</h3>
            <input
              id="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
            />
          </label>
          <br></br>
          <h3>Choices: </h3>
          <ul>{this.renderInputList()}</ul>
          <div>
            <div className="Counter-row">{this.state.choiceList}</div>
            <div className="choiceButtonsContainer">
              <button
                className="choiceButton"
                type="button"
                onClick={this.handlePlus}
              >
                +
              </button>
              <button
                className="choiceButton"
                type="button"
                onClick={this.handleMinus}
              >
                -
              </button>
            </div>
          </div>
          <input type="submit" value="Submit" className="Button" />
        </form>
      </div>
    );
  }
}
export default Create;
