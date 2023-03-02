import React from "react";
import TelluPng from "../img/Tellus.png";
import { Link } from "react-router-dom";

function Tellus() {
  return (
    <div className="container">
      <div>
        <img src={TelluPng} alt="tellus_PNG" />
      </div>
      <div className="inner_input_button">
        <label>
          <textarea className="inner_input" id="" name="" rows="" cols="">
            Are you feel warm today ? And feel energy ?
          </textarea>
        </label>
        <button className="inner_button">GENERATE</button>
        <Link to="/result" relative="path">
          <div className="submit">Submit →</div>
        </Link>
      </div>
    </div>
  );
}

export default Tellus;
