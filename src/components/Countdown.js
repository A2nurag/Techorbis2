import React, { useState, useRef, useEffect } from 'react'
import './Countdown.css'

function Countdown() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMins, setTimerMins] = useState('00');
    const [timerSecs, setTimerSecs] = useState('00');

    let interval = useRef();
    const startTimer = () => {
        const countdownDate = new Date('May 25, 2020 18:00:00 GMT+0530').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((distance % (1000 * 60)) / 1000);

            days = (days < 10) ? ('0' + days) : days;
            hours = (hours < 10) ? ('0' + hours) : hours;
            mins = (mins < 10) ? ('0' + mins) : mins;
            secs = (secs < 10) ? ('0' + secs) : secs;

            if (distance < 0) {
                clearInterval(interval.current);
            }
            else {
                setTimerHours(hours);
                setTimerDays(days);
                setTimerMins(mins);
                setTimerSecs(secs);
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })

    return (
        <section className='cCont'>
            <h1 className='startsHead'>Starts In</h1>
            <div class="clock">
                <div class="container">
                    <div className='day'>
                        <h2 id="day">{timerDays}</h2>
                        <p class="legend" id='day'>Days</p>
                    </div>
                    <h2 id="dot">:</h2>
                    <div className='hour'>
                        <h2 id="hour">{timerHours}</h2>
                        <p class="legend">Hours</p>
                    </div>
                    <h2 id="dot">:</h2>
                    <div className='min'>
                        <h2 id="min">{timerMins}</h2>
                        <p class="legend">Mins</p>
                    </div>
                    <h2 id="dot">:</h2>
                    <div className='sec'>
                        <h2 id="sec">{timerSecs}</h2>
                        <p class="legend">Seconds</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Countdown