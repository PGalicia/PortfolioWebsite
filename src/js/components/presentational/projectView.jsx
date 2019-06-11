import React, { Component } from "react"; // React
import NavBar from "./navBar.jsx"; // Component
import Button from "./button.jsx"; // Component
import { selectProject } from "./../../utils/selectProject.js"; // Utility
import parse from "html-react-parser"; // Parser

class ProjectView extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const project = selectProject(this.props.match.params.id);
    const {
      name,
      description,
      stack,
      images,
      demoLink,
      githubRepoLink
    } = project;
    return (
      <section className="project-view">
        {/* Home Navigation Bar */}
        <NavBar inHome={false} />
        <h2 className="project-view__project-name">{name}.</h2>
        <h3 className="project-view__label">Description</h3>
        <div className="project-view__description">{parse(description)}</div>
        <h3 className="project-view__label">Stack</h3>
        <h4 className="project-view__stack">{stack.join(", ")}</h4>
        <div className="project-view__images-container">
          {images.map(image => {
            let folderName = name.replace(/ /g, "-").toLowerCase();
            let imageName = image.split(".")[0].split("-");
            for (let i = 0; i < imageName.length; i++) {
              imageName[i] =
                imageName[i][0].toUpperCase() + imageName[i].substring(1);
            }
            imageName = imageName.join(" ");
            return (
              <div className="project-view__image image-container" key={image}>
                <img
                  key={image}
                  src={require(`./../../../assets/projectImages/${folderName}/${image}`)}
                />
                <p className="project-view__image-name">{imageName}</p>
              </div>
            );
          })}
        </div>
        <div className="project-view__button">
          <Button text="View Demo" link={demoLink} />
          <Button text="Check Github Repo" link={githubRepoLink} />
        </div>
        <p className="project-view__footer-text">
          If you would like to know more about the project, please do not
          hesitate to contact me at <span>galicia.patrick@gmail.com</span>
        </p>
      </section>
    );
  }
}

export default ProjectView;
