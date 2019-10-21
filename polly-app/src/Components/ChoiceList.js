import React, { Component } from "react";
import Choice from "./Choice";

class ChoiceList extends Component {
  constructor() {
    super();

    // this.state = this.incrementCount = this.increaseCount.bind(this);
    // this.decreaseCount = this.decreaseCount.bind(this);
  }

  //   increaseCount() {}
  //   decreaseCount() {
  //     let count = this.state.count - 1;
  //     this.setState({
  //       count
  //     });
  //     console.log(this.state.count);
  //   }
  render() {
    let choiceList = [<Choice />, <Choice />];
    for (let i = 0; i < this.props.choice; i++) {
      choiceList.push(<Choice />);
    }
    let increaseCount = increaseCount => {
      return choiceList.push(<Choice />);
    };
    return (
      <div>
        <div className="Counter-row">{choiceList}</div>
        <button onClick={increaseCount}>+</button>
        <button>-</button>
      </div>
    );
  }
}

export default ChoiceList;
