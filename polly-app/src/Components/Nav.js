import React from "react";
import "./Nav.css";
import { Link, Route } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <div className="navContainer">
          <Link className="navLink" id="Home" to="/">
            Home
          </Link>

          <Link className="navLink" id="NewPoll" to="/create">
            Create New Poll
          </Link>

          <Link className="navLink" id="Login" to="login">
            Login
          </Link>
        </div>
      </nav>
      <main></main>
    </div>
  );
}

export default Nav;
