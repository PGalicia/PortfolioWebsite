import React, { Component } from "react"; // React
import "./../../../scss/about.scss"; // SCSS
import NavBar from "./../presentational/navBar.jsx"; // Component
import ProfileOverview from "./../presentational/profileOverview.jsx"; // Component

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
        {/* Navigation Component */}
      </section>
    );
  }
}

export default About;
