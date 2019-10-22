import React, { Component } from "react"

import Choice from "./Choice"
class ChoiceList extends Component {
 
  render() { 
    let choiceList = [<Choice />, <Choice />]
    for (let i = 0; i < this.props.choice; i++) {
      choiceList.push(<Choice />)
    }
    return <div className="Counter-row">{choiceList}</div>
  }
}

export default ChoiceList;