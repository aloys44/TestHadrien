import React, {useRef, useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";

    const ComingSoon = () => {
        const [timerDays, setTimerDays] = useState('00');
        const [timerHours, setTimerHours] = useState('00');
        const [timerMinutes, setTimerMinutes] = useState('00');
        const [timerSeconds, setTimerSeconds] = useState('00');

        let interval = useRef();

        const startTimer = () => {
            const countdownDate = new Date('June 21, 2020 11:00:00').getTime();

            interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = countdownDate - now;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                if (distance < 0){
                    clearInterval(interval.current);
                } else {
                    setTimerDays(days);
                    setTimerHours(hours);
                    setTimerMinutes(minutes);
                    setTimerSeconds(seconds);

                }

            }, 1000);
        };

        // ComponentDiMount
        useEffect(() => {
            startTimer();
            return() => {
                clearInterval(interval.current);
            };
        });


        return (
            <div>
            <section className="timer-container">
                <section className="timer">
                    <div>
                        <h2>Temps prévu avant la prochaine course</h2>
                        <h3>Inscrivez vous !</h3>
                        <center>
                            <a class="button is-white">
                            <strong>
                                <NavLink to="/Sortie">Participer à la prochaine course</NavLink>
                            </strong>
                            </a>
                        </center>
                    </div>
                    <div>
                        <section>
                            <p>{timerDays}</p>
                            <p><small>Jours</small></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerHours}</p>
                            <p><small>Heures</small></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerMinutes}</p>
                            <p><small>Minutes</small></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerSeconds}</p>
                            <p><small>Secondes</small></p>
                        </section>
                    </div>
                </section>
            </section>
            </div>
        );
    };

export default ComingSoon;