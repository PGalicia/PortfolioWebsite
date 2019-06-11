import React, { Component } from "react"; // React
import NavBar from "./../presentational/navBar.jsx"; // Component
import ProfileOverview from "./../presentational/profileOverview.jsx"; // Component
import Experience from "./../presentational/experience.jsx"; // Component
import Skill from "./../presentational/skill.jsx"; // Component
import Button from "./../presentational/button.jsx"; // Component
import { EXPERIENCE } from "./../../constants/experience.js"; // Constants
import { SKILLS } from "./../../constants/skills.js"; // Constants
import resume from "./../../../assets/resume.pdf";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="about">
        {/* Navigation Component */}
        <NavBar inHome={false} />

        {/* Profile Overview Component */}
        <ProfileOverview />

        {/* Experience Component */}
        <Experience experiences={EXPERIENCE} />

        {/* Toolbox Component */}
        <Skill skills={SKILLS} />

        <p className="about__subtext">
          If you have any questions or just want to say hi, please email me @{" "}
          <span className="about__email">galicia.patrick@gmail.com</span>. If
          you just want my resume, here you go...
        </p>

        {/* To my Resume Button */}
        <Button text="VIEW MY RESUME" isDemoAvailable={null} link={resume} />
      </section>
    );
  }
}

export default About;
