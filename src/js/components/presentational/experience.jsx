import React from "react"; // React

const Experience = props => {
  return (
    <section className="experiences">
      <h2 className="experiences__label section-label">
        Technical
        <br />
        Experience.
      </h2>
      {props.experiences.map(experience => {
        return (
          <div className="experiences__card" key={experience.company}>
            <h3 className="experiences__position">{experience.position}</h3>
            <h4 className="experiences__company">{experience.company}</h4>
            <h6 className="experiences__locationDate">
              {`${experience.location}`} &bull; {`${experience.date}`}
            </h6>
            <ul className="experiences__contributions">
              {experience.contributions.map(contribution => {
                return (
                  <li className="experiences__statement" key={contribution}>
                    {contribution}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
