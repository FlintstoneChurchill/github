import React from "react";
import "./Modal.css";
import Overlay from "../Overlay/Overlay";

const Modal = props => {
  return (
    <>
      <Overlay
        show={props.show}
        clicked={props.closed}
      />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
