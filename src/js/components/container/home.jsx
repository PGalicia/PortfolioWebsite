/*
    Imports
*/
import React, { Component } from "react"; // React
import "./../../../scss/home.scss"; // SCSS
import Typed from "react-typed"; // React-Typed
import { TYPEWRITER_TEXT } from "./../../constants/typewriterTexts.js"; // Constants

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="home-container">
        <nav className="navbar-container">
          <p className="navlink" id="work">
            WORK.
          </p>
          <p className="navlink" id="about">
            ABOUT.
          </p>
        </nav>
        <div className="header-image">
          <svg width="100%" height="100%">
            <mask id="maskLayer">
              <rect width="100%" height="100%" fill="#fff" />
              <text
                x="50%"
                y="40%"
                text-anchor="middle"
                className="name"
                id="patrick"
              >
                PATRICK
              </text>
              <text
                x="50%"
                y="90%"
                text-anchor="middle"
                className="name"
                id="galicia"
              >
                GALICIA
              </text>
            </mask>

            <rect id="masked" width="100%" height="100%" fill="#f8f8fa" />
          </svg>
        </div>
        <div className="header-texts">
          <p>I'm an Aspiring Full Stack Developer</p>
          <div>
            and I'm also<span> </span>
            <Typed
              className="typewriter"
              strings={TYPEWRITER_TEXT}
              typeSpeed={40}
              backSpeed={50}
              backDelay={1000}
              cursorChar="_"
              loop
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
