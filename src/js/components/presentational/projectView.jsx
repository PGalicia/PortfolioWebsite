import React from "react"; // React
import NavBar from "./navBar.jsx"; // Component
import "./../../../scss/projectView.scss"; // SCSS
import { selectProject } from "./../../utils/selectProject.js"; // Utility

const ProjectView = props => {
  const project = selectProject(props.match.params.id);
  const { name, description, stack, images } = project;
  return (
    <section className="individual-project-container">
      {/* Home Navigation Bar */}
      <NavBar inHome={false} />
      <h2>{name}.</h2>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Stack</h3>
      <h4>{stack.join(", ")}</h4>
      <div className="website-mockup-images-container">
        {images.map(image => {
          return (
            <div key={image}>
              <img key={image} />
              <p>{image.replace("-", " ")}</p>
            </div>
          );
        })}
      </div>
      <div className="project-button-container">
        <button>View Demo</button>
        <button>Check Github Repo</button>
      </div>
    </section>
  );
};

export default ProjectView;
