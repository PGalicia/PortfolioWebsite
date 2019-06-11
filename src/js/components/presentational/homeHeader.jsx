import React from "react"; // React
import Typed from "react-typed"; // React-Typed
import { TYPEWRITER_TEXT } from "./../../constants/typewriterTexts.js"; // Constants
import Header from "./../../../assets/header.png"; // Asset

const HomeHeader = () => {
  return (
    <section className="home-header">
      <img className="home-header__image" src={Header} />
      <div className="home-header__texts">
        <p className="home-header__label">
          I'm an Aspiring Full Stack Developer
        </p>
        <div className="home-header__changing-text">
          and I'm also{" "}
          <Typed
            className="home-header__typewriter"
            strings={TYPEWRITER_TEXT}
            typeSpeed={40}
            backSpeed={25}
            backDelay={1000}
            cursorChar="_"
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
