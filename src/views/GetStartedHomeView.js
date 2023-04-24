import React from "react";
import Image from "../asset/images/logo.png";

const GetStartedHomeView = () => {
  return (
    <div className="get-started-root">
      <div className="container">
        <div className="get-started">
          <div className="inner-circle"></div>
          <div className="outer-circle"></div>
          <img src={Image}></img>
        </div>
      </div>
    </div>
  );
};

export default GetStartedHomeView;
