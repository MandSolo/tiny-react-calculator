import React from "react";
import "./ACButton.css";

const ACButton = props => (
  <div className="ac-button" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ACButton;
