import React from "react"; // React
import "./../../../scss/experience.scss"; // SCSS

const Experience = props => {
  return (
    <section className="experiences-container">
      <h2>
        Technical
        <br />
        Experience.
      </h2>
      {props.experiences.map(experience => {
        return (
          <div className="experience-container" key={experience.company}>
            <h3>{experience.position}</h3>
            <h4>{experience.company}</h4>
            <h6>
              {`${experience.location}`} &bull; {`${experience.date}`}
            </h6>
            <ul>
              {experience.contributions.map(contribution => {
                return <li key={contribution}>{contribution}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
