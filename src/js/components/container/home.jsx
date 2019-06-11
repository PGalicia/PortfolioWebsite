/*
    Imports
*/
import React, { Component } from "react"; // React
import NavBar from "./../presentational/navBar.jsx"; // Component
import HomeHeader from "./../presentational/homeHeader.jsx"; // Component
import ProjectList from "./../presentational/projectList.jsx"; // Component
import { Redirect } from "react-router-dom"; // React-Router

class Home extends Component {
  constructor() {
    super();

    this.state = {
      toProjectPage: false,
      projectId: -1
    };

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(e, id) {
    this.setState({ toProjectPage: true, projectId: id });
  }

  render() {
    if (this.state.toProjectPage) {
      return <Redirect to={`/project/${this.state.projectId}`} />;
    }

    return (
      <section className="home">
        {/* Home Navigation Bar */}
        <NavBar inHome={true} />

        {/* Home Header */}
        <HomeHeader />

        {/* Project List */}
        <ProjectList onClick={(e, id) => this.handleButtonPress(e, id)} />
      </section>
    );
  }
}

export default Home;
