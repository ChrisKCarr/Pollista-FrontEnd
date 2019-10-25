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
      let res = await pollyApi.post("/newpoll", poll, {
        headers: {
          token: window.sessionStorage.jwt,
        },
      });
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
  };
  updatePoll = async poll => {
    let token = window.sessionStorage.jwt;
    try {
      await pollyApi.put(`/update/${poll._id}`, poll, {
        headers: {
          token: token,
        },
      });
      await this.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  voteOnPoll = async poll => {
    let token = window.sessionStorage.jwt;
    try {
      await pollyApi.put(`/update/${poll._id}`, poll, {
        headers: {
          token: token,
          key: "9g6hiE3ex2T",
        },
      });
      await this.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  deletePoll = async poll => {
    let token = window.sessionStorage.jwt;
    try {
      await pollyApi.delete(`/delete/${poll._id}`, {
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
      if (user) user = user.data;
      this.setState({ polls: polls.data, user: user });
    } catch (err) {}
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
          deletePoll: this.deletePoll,
          voteOnPoll: this.voteOnPoll,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Context;
