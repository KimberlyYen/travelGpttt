import React from "react";
import ResultImg from "../img/Result.png";
import { Link } from "react-router-dom";

function Result() {
  return (
    <div className="result">
      <div className="text">
        <div className="question">Do you like this result?</div>
        <div className="yes_or_no">
          <Link to="/tellus" relative="path">
            <p>Try it again → </p>
          </Link>
          <Link to="/site" relative="path">
            <p className="yes"> Yes →</p>
          </Link>
        </div>
      </div>

      <div className="picture">
        <img src={ResultImg} alt="Result_PNG" />
      </div>
    </div>
  );
}

export default Result;
