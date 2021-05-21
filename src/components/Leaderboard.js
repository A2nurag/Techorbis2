import React, { useEffect, useState } from "react";
import db, { auth } from "../firebase";
import "./Leaderboard.css";
import _ from "lodash";

function Leaderboard() {
  const [allScores, setAllScores] = useState([]);

  useEffect(async () => {
    db.collection("scores")
      .orderBy("score", "desc")
      .onSnapshot((snapshot) => {
        setAllScores(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            player: doc.data().player,
            score: doc.data().score,
          }))
        );
      });
  }, []);

  return (
    <div className="leaderboard">
      <div className="leaderboard__container">
        <h1 className="leaderboard__heading">Leaderboards</h1>
        {allScores.map((player) => (
          // <SidebarChannel key={id} id={id} channelName={channel.channelName} />
          <div key={player.id} className="player-card">
            <div>
              <h3 className="player">{player.player}</h3>
            </div>
            <h3>{player.score}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
