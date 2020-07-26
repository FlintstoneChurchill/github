import React from "react";
import {Spinner} from "reactstrap";
import "./Loader.css";
import Overlay from "../Overlay/Overlay";

const Loader = () => {
  return (
    <>
      <Overlay show={true} />
      <Spinner
        style={{width: '3rem', height: '3rem'}}
        className="Loader"
        color="primary"
      />
    </>
  );
};

export default Loader;
