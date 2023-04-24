import React from "react";
import Image from "../asset/images/logo.png";
import { Link } from 'react-router-dom';

const GetStartedHomeView = () => {
  return (
    <div className="get-started-root">
      <div className="container">
        <Link to="/getstartedwelcome" className="get-started">
          <div className="inner-circle"></div>
          <div className="outer-circle"></div>
          <img src={Image}></img>
        </Link>
      </div>
    </div>
  );
};

export default GetStartedHomeView;
