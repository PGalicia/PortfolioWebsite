import React from "react"; // Reaact
import "./../../../scss/navBar.scss"; // SCSS
import Logo from "./../../../assets/logo.svg"; // Asset
import { Link } from "react-router-dom"; // React-Router

const NavBar = props => {
  return (
    <nav className="navbar-container">
      {!props.inHome && (
        <Link to="/">
          <img src={Logo} className="logo" />
        </Link>
      )}
      <p className="navlink" id="work">
        <Link to="/">WORK.</Link>
      </p>
      <p className="navlink" id="about">
        <Link to="/about">ABOUT.</Link>
      </p>
    </nav>
  );
};

export default NavBar;
