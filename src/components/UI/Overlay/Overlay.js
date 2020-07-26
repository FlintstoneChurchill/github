import React from "react";
import "./Overlay.css";

const Overlay = props => {
  return props.show ? <div
    className="Overlay"
    onClick={props.clicked}
  /> : null;
};

export default Overlay;
