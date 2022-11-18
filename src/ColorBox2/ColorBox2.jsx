import React, { useState } from "react";
import "./ColorBox2.css";
import Hold from "../Hold/Hold";

function ColorBox2({ toggle }) {
  const colorVal = toggle ? "green" : "pink";

  const [lock, setLock] = useState(false);
  const updateLock = () => setLock(!lock);

  const [color, setColor] = useState("");
  const colorLock = () => setColor(colorVal);

  if (lock) {
    return (
      <div className="colorbox2" style={{ backgroundColor: colorVal }}>
        <Hold
          lock={lock}
          updatelock={updateLock}
          colorlock={colorLock}
          color={colorVal}
        />
      </div>
    );
  } else {
    return (
      <div
        className="colorbox2"
        style={{ backgroundColor: { color }, border: "2px solid red" }}
      >
        <Hold
          lock={lock}
          updatelock={updateLock}
          colorlock={colorLock}
          color={colorVal}
        />
      </div>
    );
  }
}

export default ColorBox2;
