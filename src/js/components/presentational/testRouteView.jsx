import React from "react";
import Image from "./../../../assets/poppies.jpg";

const TestRouteView = props => {
  return (
    <>
      <h1>Welcome to the other component</h1>
      <img src={Image} />
    </>
  );
};

export default TestRouteView;
