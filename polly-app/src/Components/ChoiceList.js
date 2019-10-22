import React, { Component } from "react";
import Choice from "./Choice";

class ChoiceList extends Component {
  constructor() {
    super();
    this.state = {
      choiceList: [<Choice />, <Choice />],
      showChoice: false
    };
    this.plusButton = this.plusButton.bind(this);
    this.minusButton = this.minusButton.bind(this);
  }

  plusButton() {
    const choiceList = [...this.state.choiceList, <Choice />];
    this.setState({
      choiceList
    });

    console.log(this.state.choiceList);
  }

  minusButton() {
    const choiceList = [...this.state.choiceList];
    choiceList.pop();
    this.setState({
      choiceList
    });

    console.log(this.state.choiceList);
  }
  render() {
    return (
      <div>
        <div className="Counter-row">{this.state.choiceList}</div>
        <div>
          <button type="button" onClick={this.plusButton}>
            +
          </button>
        </div>

        <button type="button" onClick={this.minusButton}>
          -
        </button>
      </div>
    );
  }
}

export default ChoiceList;
