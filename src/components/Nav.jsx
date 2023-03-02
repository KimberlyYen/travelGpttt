import React from "react";
import forkit from "../img/Logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Link to="/" relative="path">
      <nav>
        <div className="logo">
          <img src={forkit} alt="" />
        </div>
      </nav>
    </Link>
  );
}

export default Nav;
