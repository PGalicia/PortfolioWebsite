import React from "react"; // React
import "./../../../scss/homeHeader.scss"; // SCSS
import Typed from "react-typed"; // React-Typed
import { TYPEWRITER_TEXT } from "./../../constants/typewriterTexts.js"; // Constants
import Header from "./../../../assets/header.svg"; // Asset

const HomeHeader = props => {
  return (
    <>
      <div className="header-image">
        <img src={Header} />
      </div>
      <div className="header-texts">
        <p>I'm an Aspiring Full Stack Developer</p>
        <div>
          and I'm also<span> </span>
          <Typed
            className="typewriter"
            strings={TYPEWRITER_TEXT}
            typeSpeed={40}
            backSpeed={25}
            backDelay={1000}
            cursorChar="_"
            loop
          />
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
