import React from "react"; // React
import "./../../../scss/button.scss"; // SCSS

const Button = props => {
  if (props.link == "") {
    return (
      <a className="big-button-container unavailable">
        <span>Demo Unavailable</span>
      </a>
    );
  }
  return (
    <a className="big-button-container" href={props.link} target="_blank">
      <span>{props.text}</span>
    </a>
  );
};

export default Button;
