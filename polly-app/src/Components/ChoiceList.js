import React, { Component } from "react";
import Choice from "./Choice";
import "./ChoiceList.css";

class ChoiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceList: [
        <Choice choices={this.props.choices} inputKey={1} />,
        <Choice choices={this.props.choices} inputKey={2} />
      ],
      inputKey: 3
    };
    this.plusButton = this.plusButton.bind(this);
    this.minusButton = this.minusButton.bind(this);
    this.checkChoiceLength = this.checkChoiceLength.bind(this);
    this.addKey = this.addKey.bind(this);
    this.minusKey = this.minusKey.bind(this);
  }

  addKey() {
    this.setState({
      inputKey: this.state.inputKey + 1
    });
  }

  minusKey() {
    this.setState({
      inputKey: this.state.inputKey - 1
    });
  }

  checkChoiceLength() {
    if (this.state.choiceList.length <= 2) {
      return true;
    }
  }

  plusButton() {
    this.addKey();
    console.log(this.state.inputKey);
    const choiceList = [
      ...this.state.choiceList,
      <Choice choices={this.props.choices} key={this.state.inputKey} />
    ];
    this.setState({
      choiceList
    });
  }

  minusButton() {
    // this.checkChoiceLength();
    if (this.checkChoiceLength() === true) {
      alert("You can not have less than 2 choices.");
    } else {
      this.minusKey();

      const choiceList = [...this.state.choiceList];
      choiceList.pop();
      this.setState({
        choiceList
      });
    }
    console.log(this.state.inputKey);
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
