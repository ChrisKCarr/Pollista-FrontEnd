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
        <>
          <Link className="navLink" id="NewPoll" to="/create">
            Create New Poll
          </Link>
          <button className="navLink" id="Logout" onClick={e => handleClick()}>
            Logout
          </button>
        </>
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
    <div className="navContainer">
      <nav>
        <Link className="navLink" id="Home" to="/">
          Home
        </Link>
        {inOrOut()}
      </nav>
    </div>
  );
}

export default Nav;
