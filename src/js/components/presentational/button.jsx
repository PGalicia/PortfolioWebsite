import React from "react"; // React

const Button = props => {
  if (props.link == "") {
    return (
      <a className="button button--unavailable">
        <span>Demo Unavailable</span>
      </a>
    );
  }
  return (
    <a className="button" href={props.link} target="_blank">
      <span>{props.text}</span>
    </a>
  );
};

export default Button;
