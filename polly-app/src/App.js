import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Create from "./Components/Create"

function App() {
  return (
    <div>
      <header>
        <Switch>
          <Route exact path="/" component={Nav} />
          {/* // Route to createPoll */}
          <Route path ="/create" component={Create}/>
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
