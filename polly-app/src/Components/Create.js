import React, { Component } from "react";
import "./Create.css";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import ChoiceList from "./ChoiceList";
import PollContext from "../contexts/PollContext";

class Create extends Component {
  static contextType = PollContext;
  constructor(props) {
    super(props);
    this.state = { question: "", description: "", choices: [] };
    this.i = 1;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    let id = event.target.id;
    return this.setState({ [id]: event.target.value });
  };
  handleMinus = () => {
    let choicesArr = this.state.choices;
    choicesArr.pop();
    this.i--;
    this.setState({ choices: choicesArr });
  };
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    //let choices =  this.state.choices.split
    /* this.context.newPoll({
     question: "What time do you wake up?",
     choices: [
       { text: "6am" },
       { text: "8am" },
       { text: "10am" },
       { text: "noon" },
     ],
   });*/
  }
  render() {
    console.log(this.state);

    return (
      <div>
        <Route component={Nav} />
        <h1 className="Title">Create a new poll</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Question: </h3>
            <input
              id="question"
              type="text"
              value={this.state.question}
              onChange={this.handleChange}
              name="question"
            />
          </label>
          <br></br>
          <label>
            <h3>Description: (optional)</h3>
            <input
              id="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
            />
          </label>
          <br></br>
          {/* <label>
           <h3>Type: </h3>
           <select>
             <option>Food</option>
             <option>Opinion</option>
             <option>Question</option>
           </select>
         </label> */}
          <br></br>
          <h3>Choices: </h3>
          <ChoiceList choices={this.state.choices} />
          <input type="submit" value="Submit" className="Button" />
        </form>
      </div>
    );
  }
}
export default Create;
