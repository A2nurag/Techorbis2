import React from "react";
import "./Intro.css";
import { Button } from "@material-ui/core";
import mntclogo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="intro">
      <div className="intro__header">
        <h3>Welcome to</h3>
        <h1>Techorbis 2.0</h1>
      </div>

      <div className="intro__button">
        <Link to="/questions">
          <Button>Go to Questions</Button>
        </Link>
        or
        <Link to="/rules" className="rules-link">
          Check the Rules
        </Link>
      </div>

      <div className="intro__footer">
        <h4>
          Developed by the <img src={mntclogo}></img> Team
        </h4>
      </div>
    </div>
  );
}

export default Intro;
