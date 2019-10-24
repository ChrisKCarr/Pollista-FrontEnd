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

          <a
            className="navLink"
            id="Login"
            href="https://polly-api.herokuapp.com/auth/google"
          >
            Login
          </a>
        </div>
      </nav>
      <main></main>
    </div>
  );
}

export default Nav;
