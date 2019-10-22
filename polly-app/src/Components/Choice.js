import React, { Component } from "react";
import "./Create.css";
import "./ChoiceList.css";

class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="ChoiceContainer">
        <input
          type="text"
          //   value={this.state.value}
          onChange={this.handleChange}
          name="choice"
        />
      </div>
    );
  }
}

export default Choice;
