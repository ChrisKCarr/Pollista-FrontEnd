import React, { Component } from "react";
import Choice from "./Choice";
import "./ChoiceList.css";

class ChoiceList extends Component {
  constructor() {
    super();
    this.state = {
      choiceList: [<Choice />, <Choice />],
      showChoice: false
    };
    this.plusButton = this.plusButton.bind(this);
    this.minusButton = this.minusButton.bind(this);
    this.checkChoiceLength = this.checkChoiceLength.bind(this);
  }

  checkChoiceLength() {
    if (this.state.choiceList.length <= 2) {
      return true;
    }
  }

  plusButton() {
    const choiceList = [...this.state.choiceList, <Choice />];
    this.setState({
      choiceList
    });

    console.log(this.state.choiceList);
  }

  minusButton() {
    // this.checkChoiceLength();
    if (this.checkChoiceLength() === true) {
      alert("You can not have less than 2 choices.");
    } else {
      const choiceList = [...this.state.choiceList];
      choiceList.pop();
      this.setState({
        choiceList
      });
    }

    console.log(this.state.choiceList);
  }

  render() {
    return (
      <div>
        <div className="Counter-row">{this.state.choiceList}</div>
        <div className="choiceButtonsContainer">
          <button
            className="choiceButton"
            type="button"
            onClick={this.plusButton}
          >
            +
          </button>
          <button
            className="choiceButton"
            type="button"
            onClick={this.minusButton}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default ChoiceList;
