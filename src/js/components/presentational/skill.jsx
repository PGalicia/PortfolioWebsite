import React from "react"; // React
// import "./../../../scss/skill.scss"; // SCSS

const Skill = props => {
  return (
    <section className="skills">
      <h2 className="skills__label section-label">My Toolbox.</h2>
      {props.skills.map(skill => {
        const list = skill.list.join(", ");
        return (
          <div className="skills__card" key={skill.title}>
            <h3 className="skills__title">{skill.title}</h3>
            <p className="skills__list">{list}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Skill;
