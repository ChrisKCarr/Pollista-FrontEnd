import React, { useContext } from "react";
import "./Nav.css";
import { Link, Route } from "react-router-dom";
import PollContext from "../contexts/PollContext";

function Nav(props) {
  const context = useContext(PollContext);
  const handleClick = () => {
    context.logOut();
    props.history.push("/");
  };
  const inOrOut = () => {
    if (window.sessionStorage.jwt) {
      return (
        <div>
          <Link className="navLink" id="NewPoll" to="/create">
            Create New Poll
          </Link>
          <button className="navLink" id="Logout" onClick={e => handleClick()}>
            Logout
          </button>
        </div>
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
          {inOrOut()}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
