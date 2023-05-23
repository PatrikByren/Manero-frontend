import React from "react";
import { NavLink } from "react-router-dom";

const Field = ({ icon, text, subText, submitbutton, linkTo, streetAddress, postalCode, city,deleteButton, submithandler, index }) => {

  return (
    <div className="field">
      <div className="fieldicon">
      {icon}
        <div className="field-content">
          <p className="head-text">{text}</p>
          <p className="sub-text">{subText}</p>
          {streetAddress && (<p className="sub-text">{streetAddress}, {postalCode} {city}</p>)}
        </div>
      </div>

      <button onClick={() =>submithandler(index)} className="trashbtn">
      {deleteButton}</button>
      <NavLink to={linkTo}>
      {submitbutton}</NavLink>
    </div>
  );
};

export default Field;
