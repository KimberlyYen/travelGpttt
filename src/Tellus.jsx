import React from "react";
import "./App.css";
import Ｔellus from "./img/tellus.png";

function Tellus() {
  return (
    <div className="container">
      <div>
        <img src={Ｔellus} alt="tellus_PNG" />
      </div>
      <div className="inner_input_button">
        <label>
          <textarea type="text" className="inner_input" />
        </label>
        <button className="inner_button">GENERATE</button>
        <div className="submit">Submit →</div>
      </div>
    </div>
  );
}

export default Tellus;
