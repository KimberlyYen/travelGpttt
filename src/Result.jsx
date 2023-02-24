import React from "react";
import "./App.css";
import ResultImg from "./img/Result.png";

function Result() {
  return (
    <div className="result">
      <div className="picture">
        <img src={ResultImg} alt="Result_PNG" />
      </div>

      <div className="text">
        <div className="question">Do you like this result?</div>
        <div className="submit yes_or_no">
          <div>Try it again → </div>
          <div className="yes"> Yes →</div>
        </div>
      </div>
    </div>
  );
}

export default Result;
