import React, { useEffect, useState } from "react";
import "./styles/clock.css";

export const Clock = () => {
  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    const second = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => {
      clearInterval(second);
    };
  }, [fecha]);

  //const months = [
  //  //'',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
  //]
  //let month = months[fecha.getDate()]
  //console.log(month)

  const days = [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[fecha.getDay()];
  console.log(day);

  return (
    <div className=" main-div flex flex-col items-center justify-center content-center">
      <div className="  bg-gradient-to-r from-teal-700 to-cyan-900  h-72 w-56 rounded-lg flex flex-col items-center justify-center content-center">
        <div className="text-slate-300 text-xl flex flex-row justify-center">
          <h1>{fecha.getMonth()}/</h1>
          <h1>{fecha.getDate()}/</h1>
          <h1>{fecha.getFullYear()}</h1>
        </div>
        <div className="text-orbitron text-slate-300 text-xl font-extrabold my-3">
          {" "}
          {/*day */}
          <h2 className="text-xl font-extrabold">{day}</h2>
        </div>
        <div className="hora text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-cyan-300">
          <h3>{fecha.toLocaleTimeString()}</h3>
        </div>
      </div>
    </div>
  );
};
