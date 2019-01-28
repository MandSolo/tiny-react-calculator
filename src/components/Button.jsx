import React from "react";
import "./Button.css";

const isOperator = value => {
  //checks to make sure the value inputted is a number or . or =
  return !isNaN(value) || value === "." || value === "=";
};

const Button = props => (
  //it returns the value if it is a number or . or = else it returns operator
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default Button;
