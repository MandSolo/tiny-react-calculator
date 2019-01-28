import React from "react";
import "./Button.css";

const isOperator = value => {
    //checks to make sure the value inputted is a number!!!
  return !isNaN(value) || value === "." || value === "=";
};

const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
  >
    {props.children}
  </div>
);

export default Button;
