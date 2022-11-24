import React from "react";
import "./Toggle.css";
import ColorLabel from "../ColorLabel/ColorLabel";

function Toggle({ update, items }) {
  return (
    <div className="toggler" onClick={update}>
      {items}
    </div>
  );
}

export default Toggle;
