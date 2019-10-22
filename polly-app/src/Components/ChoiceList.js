import React, { Component } from "react"

import Counter from "./Counter"

class ChoiceList extends Component {
 
  render() { 
    let choiceList = []
    for (let i = 0; i < this.props.choice; i++) {
      choiceList.push(<Choice />)
    }
    return <div className="Counter-row">{choiceList}</div>
  }
}

export default ChoiceList;