import React from "react"; // React
import "./../../../scss/button.scss"; // SCSS

const Button = props => {
  return <button className="big-button-container">{props.text}</button>;
};

export default Button;
