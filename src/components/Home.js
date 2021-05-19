import React from 'react'
import Countdown from './Countdown'
import Intro from './Intro';

function Home() {
    const countdownDate = new Date('May 25, 2020 18:00:00 GMT+0530').getTime();
    const now = new Date().getTime();

    return (
        <>
            {
                (now < countdownDate) && (
                    <Countdown />
                )
            }
            {
                (now > countdownDate) && (
                    <Intro />
                )
            }
        </>
    )
}

export default Home
