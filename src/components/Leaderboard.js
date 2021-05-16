import React, { useEffect, useState } from 'react'
import db, { auth } from '../firebase';

function Leaderboard() {
    const [allScores, setAllScores] = useState([])

    useEffect(async () => {
        db.collection('scores').onSnapshot((snapshot) =>
            setAllScores(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    player: doc.data().player,
                    score: doc.data().score
                }))
            )
        );

        {
            console.log(allScores)
        }
    }, [])

    return (
        <div>
            {allScores.map((player) => (
                // <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                <div key={player.id}>
                    <p>{player.player}  ------  {player.score}</p>
                </div>
            ))}
        </div>
    )
}

export default Leaderboard
