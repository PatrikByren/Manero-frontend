import React from "react";
import { NavLink } from "react-router-dom";

const Field = ({ icon, text, subText, submitbutton, linkTo }) => {
  return (
    <div className="field">
      <div className="fieldicon">
      {icon}
        <div className="field-content">
          <p className="head-text">{text}</p>
          <p className="sub-text">{subText}</p>
        </div>
      </div><NavLink to={linkTo}>
      {submitbutton}</NavLink>
    </div>
  );
};

export default Field;
