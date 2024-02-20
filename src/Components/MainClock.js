import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Clock } from "./Clock";
import { Clock2 } from "./Clock2";
export const MainClock = () => {
  return (
    <div>
      <Carousel
        style={{ height: "100px" }}
        width={"100%"}
        showStatus={false}
        showArrows={false}
        swipeable={true}
        stopOnHover={true}
        transitionTime={500}
        swipeScrollTolerance={5}
        centerSlidePercentage={20}
        centerMode={false}
        showThumbs={false}
      >
        <Clock />
        <Clock2 />
      </Carousel>
    </div>
  );
};
