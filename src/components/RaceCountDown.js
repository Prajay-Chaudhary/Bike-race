import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';
import "./RaceCountDown.css";
const RaceCountDown = () => {
  const [timerMonths, setTimerMonths] = useState();
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();


  let interval;
  const startTimer = () => {
    // Set the date we're counting down to
    const countDownDate = new Date(" April 01,2025 00:00:00 ").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop bikeRace timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerMonths(months);
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  }

  useEffect(() => {
    startTimer();
  })

  return (
    <Fragment>
      <section className="counter my-5">
        <div className="container-fluid text-center p-5">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <h2
                id="headline"
                className="text-center text-white display-md-3 display-sm-2 pt-2 mt-2"
              >
                Countdown to the race
              </h2>
              <p className='fs-3 header-color'>April 1st, 2025</p>
            </div>
            <div
              id="countdown"
              className="col-xl-6 col-md-12 d-flex flex-row flex-wrap justify-content-center"
            >
              <div className="text-center  timer col-sm-4 col-md-2 flex-wrap header-color-bg mb-3">
                {" "}
                <h4
                  id="months"
                  className="text-center timer-text font-weight-bolder fs-1 pt-2 text-warning"
                >
                  {timerMonths}
                </h4>
                <p className="fs-sm-5">Months</p>
              </div>
              <div className="text-center timer col-sm-4 col-md-2 mx-3 flex-wrap mb-3 header-color-bg">
                {" "}
                <h4
                  id="days"
                  className="text-center timer-text font-weight-bolder fs-1 pt-2 text-warning"
                >
                  {timerDays}
                </h4>
                <p className="fs-sm-5">Days</p>
              </div>
              <div className="text-center  timer col-sm-4 col-md-2 flex-wrap mb-3 header-color-bg">
                <h4
                  id="hours"
                  className="text-center timer-text font-weight-bolder fs-1 pt-2 text-warning"
                >
                  {timerHours}
                </h4>
                <p className="fs-sm-5">Hours</p>
              </div>
              <div className="text-center timer col-sm-4 col-md-2 mx-3 flex-wrap mb-3 header-color-bg">
                <h4
                  id="minutes"
                  className="text-center timer-text font-weight-bolder fs-1 pt-2 text-warning"
                >
                  {timerMinutes}
                </h4>
                <p className="fs-sm-5">Minutes</p>
              </div>
              <div className="text-center timer col-sm-4 col-md-2 flex-wrap mb-3 header-color-bg">
                <h4
                  id="seconds"
                  className="text-center timer-text font-weight-bolder fs-1 pt-2 text-warning"
                >
                  {timerSeconds}
                </h4>
                <p className="fs-sm-5">Seconds</p>
              </div>
            </div>
            <div id="content" className="emoji text-center">
              <span>🚴</span>
              <span>🏁</span>
              <span>🏆</span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default RaceCountDown;
