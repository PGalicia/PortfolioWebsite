import React from "react"; // React
import "./../../../scss/skill.scss"; // SCSS

const Skill = props => {
  return (
    <section className="skills-container">
      <h2>My Toolbox.</h2>
      {props.skills.map(skill => {
        const list = skill.list.join(", ");
        return (
          <div className="skill-container" key={skill.title}>
            <h3>{skill.title}</h3>
            <p>{list}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Skill;
