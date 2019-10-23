import React, { Component } from "react";
import "./Create.css";
import "./ChoiceList.css";

class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = { choices: "", inputKey: this.props.inputKey };

    this.handleChange = this.handleChange.bind(this);
    // this.changeInnerText = this.changeInnerText.bind(this);
  }

  handleChange(event) {
    let choice = event.target.value;
    let propsChoices = this.props.choices;
    console.log(choice);
    //Below checks if the input value is a duplicate.
    if (choice != propsChoices) {
      propsChoices.push(choice);
    } else {
      alert("That choice is a duplicate.");
    }

    console.log(propsChoices);
  }

  // changeInnerText(event) {
  //   let choice = event.target.value;
  //   this.state({
  //     choices: choice
  //   });
  // }

  render() {
    // console.log(this.props.choices);
    // console.log(this.state);
    console.log(this.props.inputKey);
    return (
      <div className="ChoiceContainer">
        <input
          type="text"
          onChange={this.handleChange}
          name="choice"
          value={this.state.choices}
          // placeholder={`${this.state.choices}`}
        />
      </div>
    );
  }
}

export default Choice;
