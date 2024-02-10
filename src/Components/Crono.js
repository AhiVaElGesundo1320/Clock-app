import React, { useEffect, useState } from "react";
import "../Components/styles/cronometro.css";
import { Nav } from "./Navigation/Navigation";

export const Crono = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const startCrono = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const stopCrono = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  console.log(time);
  return (
    <div className="flex flex-col items-center content-center justify-center ">
      <Nav to={'/clock'}>
        Clock
      </Nav>
      <div className="letter bg-gradient-to-tr from-teal-700 to-cyan-900  h-72 w-56 rounded-lg flex flex-col items-center justify-center content-center">
        <div className="hora text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-cyan-300">
          <p>{time}</p>
        </div>
        <div className="flex">
          {isActive === false ? (
            <button
              className="mx-3 text-xl  text-slate-300"
              disabled={isActive}
              onClick={startCrono}
            >
              Iniciar
            </button>
          ) : null}
          {isActive === true ? (
            <div className=" letter flex flex-col text-xl  text-slate-300">
              <button
                className="my-3 w-32 rounded-lg bg-cyan-950"
                disabled={isPaused === false}
                onClick={handleReset}
              >
                Reiniciar
              </button>

              <button
                className="my-3  w-32 rounded-lg bg-cyan-950"
                onClick={stopCrono}
              >
                Stop
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
