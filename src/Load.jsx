import React from "react";
import "./App.css";
import Load from "./img/load.png";

function Loading() {
  return (
    <div className="Load">
      <div>
        <img src={Load} alt="Load_PNG" />
      </div>
    </div>
  );
}

export default Loading;
