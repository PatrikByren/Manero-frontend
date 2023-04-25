import React from "react";
import Carousel from "../components/sections/Carousel";

const GetStartedWelcome = () => {
  return (
    <div className="get-started-welcome">
      <div className="container carouselroot">
                <div className="inner-circle"></div>
                <div className="outer-circle"></div>
      <Carousel />
      </div>
    </div>
  );
};

export default GetStartedWelcome;
