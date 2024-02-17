import React, { useEffect, useState } from "react";
import "./styles/clock.css";

export const Temporizador = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(null);

  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  const format = (time) => {
    // Convert seconds into minutes and take the whole part
    const minutes = Math.floor(time / 60);

    // Get the seconds left after converting minutes
    const seconds = time % 60;

    //Return combined values as string in format mm:ss
    return `${minutes}:${padTime(seconds)}`;
  };
  useEffect(() => {
    let timer;
    if (isActive && isPaused === false) {
      if (time > 0) {
        timer = setTimeout(() => setTime((c) => c - 1), 1000);
      }
    } else {
      clearTimeout(timer);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isActive, isPaused, time]);

  const startTempo = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const stopTempo = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <div className="main-div flex flex-col items-center content-center justify-center ">
      <div className="bg-gradient-to-tr from-teal-700 to-cyan-900  h-72 w-56 rounded-lg flex flex-col items-center justify-center content-centerm">
        <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-cyan-300">
          <h3>
            {time === 0 ? "Time over" : <div >Countdown: {format(time)}</div>}
          </h3>
        </div>
        <button
          className="my-3 mx-3 sm:mx-none disabled:bg-opacity-50 w-32 rounded-lg bg-cyan-950 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={startTempo}
          disabled={isActive === true}
        >
          Iniciar
        </button>

        {isActive === true ? (
          <>
            <button
              className="my-3 mx-3 w-32 disabled:bg-opacity-50 rounded-lg bg-cyan-950 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
              disabled={isActive === false}
              onClick={stopTempo}
            >
              Pausar
            </button>
            <button
              onClick={handleReset}
              className="my-3 mx-3 sm:mx-none disabled:bg-opacity-50 w-32 rounded-lg bg-cyan-950 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
              disabled={isPaused === false}
            >
              Eliminar
            </button>
          </>
        ) : null}
        <form>
          <input
            type="number"
            className="w-48  bg-gradient-to-r from-rose-500 to-cyan-500 rounded-lg focus:outline-none"
            onChange={(e) => setTime(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};
