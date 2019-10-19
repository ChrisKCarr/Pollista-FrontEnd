import React from "react";
import "./Nav.css";
import { Link, Route } from "react-router-dom";

function Nav() {
  return (
    <div>
      
      <nav>
        <div className="navContainer">
          <Link className="navLink" to="/">
            Home
          </Link>
       
          <Link className="navLink" to="login">
            Login
          </Link>
       
          <Link className="navLink" to="/create">
            Create New Poll
          </Link>
        </div>
      </nav>
      <main></main>
    </div>
  );
}

export default Nav;
