import React from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <div className="navContainer">
          <Link className="navLink" to="/">
            Home
          </Link>
        </div>
      </nav>
      <main>App Body</main>
    </div>
  );
}

export default App;
