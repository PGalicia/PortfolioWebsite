/*
    Imports
*/
import React, { Component } from "react"; // React
import NavBar from "./../presentational/navBar.jsx"; // Component
import HomeHeader from "./../presentational/homeHeader.jsx"; // Component
import ProjectList from "./../presentational/projectList.jsx"; // Component

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="home-container">
        {/* Home Navigation Bar */}
        <NavBar inHome={true} />

        {/* Home Header */}
        <HomeHeader />

        {/* Project List */}
        <ProjectList />
      </section>
    );
  }
}

export default Home;
