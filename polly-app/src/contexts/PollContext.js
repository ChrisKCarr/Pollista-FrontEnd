import React from "react";
import pollyApi from "../apis/polly-api";

//Gets list of polls
const getPolls = async () => {
  let polls = await pollyApi.get();
  return polls;
};
//Create context object

let Context = React.createContext([]);

//Mange context logic
export class PollStore extends React.Component {
  state = { polls: [] };
  componentDidMount = async () => {
    let polls = await getPolls();
    this.setState({ polls: polls.data });
  };
  newPoll = async poll => {
    let res = await pollyApi.post("/newpoll", poll);
    this.setState({ polls: [...this.state.polls, res.data] });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, newPoll: this.newPoll }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Context;
/*import PollContext from "../contexts/PollContext";
-----------------------
  static contextType = PollContext;
  ----------------------------------
      this.context.newPoll({
      question: "What time do you wake up?",
      choices: [
        { text: "6am" },
        { text: "8am" },
        { text: "10am" },
        { text: "noon" },
      ],
    });*/
