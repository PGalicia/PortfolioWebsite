import React from "react";
import "./../../../scss/navBar.scss";
import Logo from "./../../../assets/logo.svg"; // Asset

const NavBar = props => {
  return (
    <nav className="navbar-container">
      {!props.inHome && <img src={Logo} className="logo" />}
      <p className="navlink" id="work">
        WORK.
      </p>
      <p className="navlink" id="about">
        ABOUT.
      </p>
    </nav>
  );
};

export default NavBar;
