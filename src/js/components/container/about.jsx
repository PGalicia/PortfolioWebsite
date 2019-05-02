import React, { Component } from "react"; // React
import "./../../../scss/about.scss"; // SCSS
import NavBar from "./../presentational/navBar.jsx"; // Component
import ProfileOverview from "./../presentational/profileOverview.jsx"; // Component
import Experience from "./../presentational/experience.jsx"; // Component
import Skill from "./../presentational/skill.jsx"; // Component
import { EXPERIENCE } from "./../../constants/experience.js"; // Constants
import { SKILLS } from "./../../constants/skills.js"; // Constants

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="about-container">
        {/* Navigation Component */}
        <NavBar inHome={false} />

        {/* Profile Overview Component */}
        <ProfileOverview />

        {/* Experience Component */}
        <Experience experiences={EXPERIENCE} />

        {/* Toolbox Component */}
        <Skill skills={SKILLS} />
      </section>
    );
  }
}

export default About;
