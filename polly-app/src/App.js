import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";

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
        <Route path="/" component={Home} />
      </main>
    </div>
  );
}

export default App;
