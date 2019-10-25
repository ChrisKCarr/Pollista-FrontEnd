import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Show from "./Components/Show";
import Edit from "./Components/Edit";
import { PollStore } from "./contexts/PollContext";
function App() {
  return (
    <div>
      <PollStore>
        <header>
          <Switch>
            <Route path={"/show/:id"} component={Show} />
            <Route path={"/update/:id"} component={Edit} />
            <Route exact path="/" component={Nav} />
            <Route path="/create" component={Create} />
          </Switch>
        </header>
        <main>
          <Route exact path="/" component={Home} />
        </main>
      </PollStore>
    </div>
  );
}

export default App;
