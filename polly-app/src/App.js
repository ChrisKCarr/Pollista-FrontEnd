import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";

function App() {
  return (
    <div>
      <header>
        <Switch>
          <Route path="/" component={Nav} />
          {/* // Route to createPoll */}
        </Switch>
      </header>
      <main>
        Main App Body Components
        {/* //Route to Home - creates a list of Polls */}
      </main>
    </div>
  );
}

export default App;
