import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Create from "./Components/Create";
// import Show from "./Components/Show";

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
        {/* <Route
          path={`/:index`}
          render={routeProps => <Show match={routeProps.match} polls={polls} />}
        /> */}
      </main>
    </div>
  );
}

export default App;
