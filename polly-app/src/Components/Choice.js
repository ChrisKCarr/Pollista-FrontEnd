import React, { Component } from "react";
import "./Create.css";
import "./ChoiceList.css";

class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = { choices: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ choices: event.target.value });
  }

  render() {
    console.log(this.state);
    console.log(this.state.choices, this.props.inputKey);
    return (
      <div className="ChoiceContainer">
        <input
          type="text"
          //   value={this.state.value}
          onChange={this.handleChange}
          name="choice"
          value={this.state.choices}
        />
      </div>
    );
  }
}

export default Choice;
