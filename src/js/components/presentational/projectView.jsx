import React from "react"; // React
import NavBar from "./navBar.jsx"; // Component
import Button from "./button.jsx"; // Component
import "./../../../scss/projectView.scss"; // SCSS
import { selectProject } from "./../../utils/selectProject.js"; // Utility

const ProjectView = props => {
  const project = selectProject(props.match.params.id);
  const { name, description, stack, images, isDemoAvailable } = project;
  return (
    <section className="individual-project-container">
      {/* Home Navigation Bar */}
      <NavBar inHome={false} />
      <h2>{name}.</h2>
      <h3>Description</h3>
      <p className="project-description">{description}</p>
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
        <Button text="View Demo" isDemoAvailable={isDemoAvailable} />
        <Button text="Check Github Repo" isDemoAvailable={null} />
      </div>
      <p className="project-footer-text">
        If you would like to know more about the project, please do not hesitate
        to contact me at <span>galicia.patrick@gmail.com</span>
      </p>
    </section>
  );
};

export default ProjectView;
