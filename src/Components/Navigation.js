import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Main } from "./Main";
import { Crono } from "./Crono";
import { Temporizador } from "./Temporizador";
import { MainClock } from "./MainClock";

export const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="main" element={<Main />} />
            <Route path="mainClock" element={<MainClock />} />
            <Route path="crono" element={<Crono />} />
            <Route path="temporizador" element={<Temporizador />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
