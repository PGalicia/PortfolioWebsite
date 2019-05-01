import React from "react"; // React
import "./../../../scss/projectList.scss"; // SCSS

const ProjectList = props => {
  return (
    <section className="projects-container">
      <div className="project-container" id="event-planner">
        <h3>EVENT PLANNER</h3>
        <p>Event Planner App</p>
      </div>
      <div className="project-container" id="wisely">
        <h3>WISELY</h3>
        <p>Budget Management App</p>
      </div>
      <div className="project-container" id="cocktail-finder">
        <h3>
          COCKTAIL
          <br />
          FINDER
        </h3>
        <p>Web App</p>
      </div>
      <div className="project-container" id="healthy-campus-initiative">
        <h3>
          HEALTHY
          <br />
          CAMPUS
          <br />
          INITIATIVE
        </h3>
        <p>Website</p>
      </div>
      <div className="project-container" id="scrapyard">
        <h3>SCRAPYARD</h3>
        <p>Pseudo E-Commerce Website</p>
      </div>
      <div className="project-container" id="seance">
        <h3>SEANCE</h3>
        <p>Game</p>
      </div>
    </section>
  );
};

export default ProjectList;
