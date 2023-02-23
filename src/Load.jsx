import React from "react";
import "./App.css";
import Load from "./img/load.png";

function Loading() {
  return (
    <div className="Frame">
      <img src={Load} alt="Load_PNG" />
    </div>
  );
}

export default Loading;
