import React from "react";
import { Button } from "@material-ui/core";
import mntclogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./QuizOver.css";

function QuizOver() {
  return (
    <div className="over">
      <div className="over__title">
        <h1 className="over__title--1">Congratulations!</h1>
        <h2 className="over__title--2">
          You have toured the world at your home
        </h2>
        <h4 className="over__title--3">
          You have successfully breached the challenge of Techorbis 2.0
        </h4>
      </div>
      <div className="over__btn">
        <Link to="/leaderboard">
          <Button>Check the leaderboards</Button>
        </Link>
      </div>
      <div className="intro__footer">
        <h4>
          Developed by the
          <a href="https://www.facebook.com/mathsntechclub/" target="_blank">
            <img src={mntclogo}></img>
          </a>
          Team
        </h4>
      </div>
    </div>
  );
}

export default QuizOver;
