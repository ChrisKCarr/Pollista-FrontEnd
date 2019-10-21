import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Create from "./Components/Create";

function App() {
  return (
    <div>
      <header>
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route path="/create" component={Create} />
        </Switch>
      </header>
      <main>
        <Route exact path="/" component={Home} />
      </main>
    </div>
  );
}

export default App;
