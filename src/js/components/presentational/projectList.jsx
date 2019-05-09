import React from "react"; // React
import "./../../../scss/projectList.scss"; // SCSS
import LookOutMan from "./../../../assets/projectLogo/lookOutMan.png";
import Candle from "./../../../assets/projectLogo/candle.png";
import UCI from "./../../../assets/projectLogo/uci.png";

const ProjectList = props => {
  return (
    <section className="projects-container">
      <div
        className="project-container"
        id="event-planner"
        onClick={e => props.onClick(e, 0)}
      >
        <h3>EVENT PLANNER</h3>
        <p>Event Planner App</p>
      </div>
      <div
        className="project-container"
        id="wisely"
        onClick={e => props.onClick(e, 1)}
      >
        <h3>WISELY</h3>
        <p>Budget Management App</p>
      </div>
      <div
        className="project-container"
        id="cocktail-finder"
        onClick={e => props.onClick(e, 2)}
      >
        <h3>
          COCKTAIL
          <br />
          FINDER
        </h3>
        <p>Web App</p>
        <img src={LookOutMan} />
      </div>
      <div
        className="project-container"
        id="healthy-campus-initiative"
        onClick={e => props.onClick(e, 3)}
      >
        <h3>
          HEALTHY
          <br />
          CAMPUS
          <br />
          INITIATIVE
        </h3>
        <p>Website</p>
        <img src={UCI} />
      </div>
      <div
        className="project-container"
        id="scrapyard"
        onClick={e => props.onClick(e, 4)}
      >
        <h3>SCRAPYARD</h3>
        <p>Pseudo E-Commerce Website</p>
      </div>
      <div
        className="project-container"
        id="seance"
        onClick={e => props.onClick(e, 5)}
      >
        <h3>SEANCE</h3>
        <p>Game</p>
        <img src={Candle} />
      </div>
    </section>
  );
};

export default ProjectList;
