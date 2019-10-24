import React, { useContext } from "react";
import "./Nav.css";
import { Link, Route } from "react-router-dom";
import PollContext from "../contexts/PollContext";

function Nav() {
  const context = useContext(PollContext);
  const inOrOut = () => {
    console.log(context);
    if (window.sessionStorage.jwt) {
      return (
        <button className="navLink" id="Logout" onClick={e => context.logOut()}>
          Logout
        </button>
      );
    } else {
      return (
        <a
          className="navLink"
          id="Login"
          href="https://polly-api.herokuapp.com/auth/google"
        >
          Login
        </a>
      );
    }
  };
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
          {inOrOut()}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
