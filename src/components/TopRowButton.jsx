import React from "react";
import "./TopRowButton.css";

const isOperator = value => {
  //checks to make sure the value inputted is a number or . or =
  return !isNaN(value) || value === "." || value === "=";
};

const TopRowButton = props => (
  //it returns the value if it is a number or . or = else it returns operator
  <div
    className={`top-button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default TopRowButton;
