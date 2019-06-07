import React from "react"; // React
import Logo from "./../../../assets/logo.svg"; // Asset
import { Link } from "react-router-dom"; // React-Router

const NavBar = props => {
  return (
    <nav className="navbar" id="navbar">
      {!props.inHome && (
        <Link to="/">
          <img src={Logo} className="navbar__logo" />
        </Link>
      )}
      <p className="navbar__link" id="work">
        <Link to="/">WORK.</Link>
      </p>
      <p className="navbar__link" id="about">
        <Link to="/about">ABOUT.</Link>
      </p>
    </nav>
  );
};

export default NavBar;
