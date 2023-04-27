import React from "react";
import { NavLink } from "react-router-dom";

const CarouselsItem = ({ headline1, headline2, content, content2 }) => {
  return (
    <div>
      <div>
        <div className="title-1 text-center">
          {headline1} <br /> {headline2}{" "}
        </div>
        <div className="content text-center">
          {content}
          <br />
          {content2}
        </div>
        <div className="d-flex justify-content-center">
          <NavLink to="/signin">
            <button className="basebtn">GET STARTED</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CarouselsItem;
