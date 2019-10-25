import React, { Component } from "react";
import Poll from "./Poll";
import queryString from "query-string";

import PollContext from "../contexts/PollContext";

class Home extends Component {
  static contextType = PollContext;
  componentDidMount = async () => {
    let query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.sessionStorage.setItem("jwt", query.token);
      await this.context.refresh();
      this.props.history.push("/");
    }
  };
  renderPollList = () => {
    return this.context.polls.map((poll, i) => {
      return <Poll key={i} pollObject={poll} />;
    });
  };
  render() {
    return <div>{this.renderPollList()}</div>;
  }
}

export default Home;
