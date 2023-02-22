import React from "react";
import "./App.css";
import forkit from "./img/Logo.png";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={forkit} alt="" />
      </div>
    </nav>
  );
}

export default Nav;
