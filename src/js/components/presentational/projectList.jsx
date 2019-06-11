import React from "react"; // React
import LookOutMan from "./../../../assets/projectLogo/lookOutMan.png";
import Candle from "./../../../assets/projectLogo/candle.png";
import UCI from "./../../../assets/projectLogo/uci.png";

const ProjectList = props => {
  return (
    <section className="project-list">
      <div
        className="project-list__card image-container"
        id="event-planner"
        onClick={e => props.onClick(e, 0)}
      >
        <h3 className="project-list__project-name">EVENT PLANNER</h3>
        <p className="project-list__project-description">Event Planner App</p>
      </div>
      <div
        className="project-list__card image-container"
        id="wisely"
        onClick={e => props.onClick(e, 1)}
      >
        <h3 className="project-list__project-name">WISELY</h3>
        <p className="project-list__project-description">
          Budget Management App
        </p>
      </div>
      <div
        className="project-list__card image-container"
        id="cocktail-finder"
        onClick={e => props.onClick(e, 2)}
      >
        <h3 className="project-list__project-name">
          COCKTAIL
          <br />
          FINDER
        </h3>
        <p className="project-list__project-description">Web App</p>
        <img className="project-list__project-image" src={LookOutMan} />
      </div>
      <div
        className="project-list__card image-container"
        id="healthy-campus-initiative"
        onClick={e => props.onClick(e, 3)}
      >
        <h3 className="project-list__project-name">
          HEALTHY
          <br />
          CAMPUS
          <br />
          INITIATIVE
        </h3>
        <p className="project-list__project-description">Website</p>
        <img className="project-list__project-image" src={UCI} />
      </div>
      <div
        className="project-list__card image-container"
        id="scrapyard"
        onClick={e => props.onClick(e, 4)}
      >
        <h3 className="project-list__project-name">SCRAPYARD</h3>
        <p className="project-list__project-description">
          Pseudo E-Commerce Website
        </p>
      </div>
      <div
        className="project-list__card image-container"
        id="seance"
        onClick={e => props.onClick(e, 5)}
      >
        <h3 className="project-list__project-name">SEANCE</h3>
        <p className="project-list__project-description">Game</p>
        <img className="project-list__project-image" src={Candle} />
      </div>
    </section>
  );
};

export default ProjectList;
