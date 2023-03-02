import React from "react";
import { Link } from "react-router-dom";
import Frame from "../img/frame.png";
import Team from "../components/Team";

function About() {
  return (
    <div className="about">
      <Link to="/tellus" relative="path">
        <div className="Frame">
          <img src={Frame} alt="About_PNG" />
        </div>
      </Link>
      <Team className="team" />
    </div>
  );
}

export default About;
