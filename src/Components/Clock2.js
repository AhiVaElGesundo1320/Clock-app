import React, { useState, useEffect } from "react";
import "./styles/clock2.css";

export const Clock2 = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="mt-9 mian-div">
      <div className="clock">
        <div
          className="hour_hand absolute h-11 w-1"
          style={{
            transform: `rotateZ(${time.getHours() * 30}deg)`,
          }}
        />
        <div
          className="min_hand absolute h-14 w-0.5 dark:bg-cyan-300 bg-cyan-900"
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`,
          }}
        />
        <div
          className="sec_hand absolute w-px h-20"
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`,
          }}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
    </div>
  );
};
