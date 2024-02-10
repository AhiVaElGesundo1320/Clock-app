import React, { useState } from "react";
import { Clock } from "./Clock";
import { Crono } from "./Crono";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //

export const Main = () => {
  return (
    <div>
      <Carousel
      width={'100%'}
         autoPlay={true}
         axis={'horizontal'}
         interval={2000}
         infiniteLoop={false}
         showStatus={false}
         showArrows={false}
         swipeable={false}
         stopOnHover={true}
         transitionTime={500}
         swipeScrollTolerance={5}
         centerSlidePercentage={20}
         centerMode={false}
         dynamicHeight={true}
         showThumbs={false} 
      >
        <div>
          <Clock />
        </div>
        <div>
          <Crono />
        </div>
        <div>
          <Clock />
        </div>
        <div>
          <Clock />
        </div>
      </Carousel>
    </div>
  );
};
