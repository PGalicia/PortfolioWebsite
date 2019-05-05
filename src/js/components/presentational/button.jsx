import React from "react"; // React
import "./../../../scss/button.scss"; // SCSS

const Button = props => {
  if (props.isDemoAvailable == false) {
    return (
      <button className="big-button-container unavailable">
        Demo Unavailable
      </button>
    );
  }
  return (
    <button className="big-button-container">
      <a href={props.link} target="_blank">
        {props.text}
      </a>
    </button>
  );
};

export default Button;
