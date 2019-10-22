import React, { Component } from "react";
import "./Create.css";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import ChoiceList from "./ChoiceList";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { pollName: "", question: "", choices: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let id = event.target.id;
    this.setState({ [id]: event.target.value });
  }
  handleSubmit(event) {
    console.log("poll submitted " + this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Route component={Nav} />
        <h1 className="Title">Create a new poll</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Poll Name: </h3>
            <input
              id="pollName"
              type="text"
              value={this.state.pollName}
              onChange={this.handleChange}
              name="pollName"
            />
          </label>
          <br></br>
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
            <h3>Type: </h3>
            <select>
              <option>Food</option>
              <option>Opinion</option>
              <option>Question</option>
            </select>
          </label>
          <br></br>
          <h3>Choices: </h3>
          <ChoiceList choices={this.state.choices} />
          <input type="submit" value="Submit" className="Button" />
        </form>
      </div>
    );
  }
}

export default Create;
