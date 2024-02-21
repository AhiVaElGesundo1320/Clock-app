import React from "react";

//import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { Navigation } from "./Navigation";
import { useTheme } from "./ThemeContext/ThemeContext";

export const Main = () => {
  const themeActive = useTheme();
  return (
    <div>
      <Navigation />
      <button onClick={themeActive}>
        <span class="material-symbols-outlined">contrast</span>
      </button>
    </div>
  );
};
