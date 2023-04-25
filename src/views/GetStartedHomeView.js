import React from "react";
import Image from "../asset/images/logo.png";
import { Link } from 'react-router-dom';

const GetStartedHomeView = () => {
  setTimeout(function(){
    window.location.href = "/GetStartedWelcome";
}, 3000);
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
