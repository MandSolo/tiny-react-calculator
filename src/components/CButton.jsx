import React from "react";
import "./CButton.css";

const CButton = props => (
  <div className="c-button" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default CButton;
