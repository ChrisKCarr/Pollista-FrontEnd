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
  state = { polls: [], user: null };
  componentDidMount = async () => {
    await this.refresh();
  };
  newPoll = async poll => {
    try {
      let res = await pollyApi.post("/newpoll", poll);
      this.setState({ polls: [...this.state.polls, res.data] });
    } catch (err) {
      console.log(err);
    }
  };
  logOut = async () => {
    console.log(window.sessionStorage.jwt);
    pollyApi.get("/auth/logout", {
      headers: {
        token: window.sessionStorage.jwt,
      },
    });
    sessionStorage.clear();
    this.setState({ user: null });
    console.log(sessionStorage);
    console.log(this.state);
  };
  updatePoll = async (poll, token = window.sessionStorage.jwt) => {
    try {
      let res = await pollyApi.put(`/update/${poll._id}`, poll, {
        headers: {
          token: token,
        },
      });
      await this.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  refresh = async () => {
    try {
      let polls = await getPolls();
      let token = window.sessionStorage.jwt;
      let user = token ? await pollyApi.get(`/auth/${token}`) : null;
      console.log(user);
      if (user) user = user.data;
      this.setState({ polls: polls.data, user: user });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          newPoll: this.newPoll,
          updatePoll: this.updatePoll,
          refresh: this.refresh,
          logOut: this.logOut,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Context;
