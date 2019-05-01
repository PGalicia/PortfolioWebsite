import React from "react";
import "./../../../scss/homeNavBar.scss";

const HomeNavBar = props => {
  return (
    <nav className="navbar-container">
      <p className="navlink" id="work">
        WORK.
      </p>
      <p className="navlink" id="about">
        ABOUT.
      </p>
    </nav>
  );
};

export default HomeNavBar;
