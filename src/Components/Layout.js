import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Outlet />
      <nav className=" flex flex-row items-center content-center justify-center">
        <ul className="w-screen flex flex-row justify-evenly">
          {" "}
          <Link end to={"/clock"}>
            <li className="my-3 w-32 rounded-lg border-2 border-cyan-950 hover:bg-gradient-to-tr from-teal-700 to-cyan-900 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <span className="material-symbols-outlined">schedule</span>
            </li>
          </Link>
          <Link to={"/crono"}>
            <li className="my-3 w-32 rounded-lg border-2 border-cyan-950 hover:bg-gradient-to-tr from-teal-700 to-cyan-900 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <span className="material-symbols-outlined">timelapse</span>
            </li>
          </Link>
          <Link to={"/temporizador"}>
            <li className="my-3 w-32 rounded-lg border-2 border-cyan-950 hover:bg-gradient-to-tr from-teal-700 to-cyan-900 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <span className="material-symbols-outlined">hourglass_top</span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
