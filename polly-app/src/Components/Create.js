import React, { Component } from "react";
import "./Create.css";
import { Link, Route } from "react-router-dom";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    console.log("poll submitted " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>Create a new poll</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Poll Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              name="pollName"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Create;
