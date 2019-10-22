import React, { Component } from "react";
import "./Create.css";
import "./ChoiceList.css";

class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = { choices: "", propsChoices: this.props.propsChoices };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let choice = event.target.value;
    let propsChoices = this.props.choices;
    this.setState({ propsChoices: this.state.propsChoices.push(choice) });
  }

  render() {
    // console.log(this.props.choices);
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
