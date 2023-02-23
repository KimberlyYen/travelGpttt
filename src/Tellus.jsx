import React from "react";
import "./App.css";
import Ｔellus from "./img/tellus.png";

function Tellus() {
  return (
    <div className="container">
      <div>
        <img src={Ｔellus} alt="" />
      </div>
      <div className="inner_input_button">
        <div className="inner_input">123</div>
        <button className="inner_button">GENERATE</button>
        <div className="submit">Submit →</div>
      </div>
    </div>
  );
}

export default Tellus;
