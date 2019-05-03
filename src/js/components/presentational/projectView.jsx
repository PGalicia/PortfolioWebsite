import React from "react"; // React
import NavBar from "./navBar.jsx"; // Component

const ProjectView = props => {
  return (
    <section className="individual-project-container">
      {/* Home Navigation Bar */}
      <NavBar inHome={false} />
      <h1>ProjectView Component</h1>
    </section>
  );
};

export default ProjectView;
