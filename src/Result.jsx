import React from "react";
import "./App.css";
import ResultImg from "./img/Result.png";

function Result() {
  return (
    <div className="picture">
      <div>
        <img src={ResultImg} alt="Result_PNG" />
      </div>
    </div>
  );
}

export default Result;
