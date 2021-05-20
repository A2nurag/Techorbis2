import React from "react";
import "./Rules.css";

function Rules() {
  return (
    <div className="rules">
      <div className="rules__container">
        <h1 className="rules__heading">Rules</h1>
        <ul>
          <li>
            The questions will be available on the website from May 25, sharp at
            6 PM
          </li>
          <li>You will be able to participate till 6PM on the next day.</li>
          <li>
            Each correct answer rewards you with 10 points. Higher the points
            you score the higher you get on the leaderboards.
          </li>
          <li>
            For each question you get 4 hints, and a coordinate related to the
            company.
          </li>
          <li>
            The first hint gives context about the coordinates provided above
            it.
          </li>
          <li>
            The successive hints provide more information about the company. Use
            all the hints to your full advantage to guess the company.
          </li>
          <li>
            In order to proceed to the next question, you need to solve the
            previous question.
          </li>
          <li>
            Time plays an important role too. If there is a tie between 2 or
            more participants then the one with the lesser time moves higher on
            the leaderboard. Use your time wisely.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;
