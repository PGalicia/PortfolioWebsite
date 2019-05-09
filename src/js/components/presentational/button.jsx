import React from "react"; // React
import "./../../../scss/button.scss"; // SCSS

const Button = props => {
  if (props.isDemoAvailable == false) {
    return (
      // <button className="big-button-container unavailable">
      //   Demo Unavailable
      // </button>
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
