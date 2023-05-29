import React, { useEffect } from "react";
import Image from "../asset/images/logo.png";
import { useUserContext } from "../context/profilecontext/UserContext";

const GetStartedHomeView = () => {
  const { FirstTime } = useUserContext()
  useEffect(() => {
    FirstTime()
  },[])
  setTimeout(function () {
    window.location.href = "/GetStartedWelcome";
  }, 3200);
  return (
    <div className="get-started-root">
      <div className="container">
        <div className="get-started">
          <div className="inner-circle"></div>
          <div className="outer-circle"></div>
          <img src={Image} alt="logo"></img>
        </div>
      </div>
    </div>
  );
};

export default GetStartedHomeView;
