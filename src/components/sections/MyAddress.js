import React from "react";
import BackArrowMiddleHead from "../individuals/BackArrowMiddleHead";
import Field from "../individuals/Field";
import { NavLink } from "react-router-dom";

const MyAddress = () => {
  return (
    <div className="container myaddress">
      <div>
        <BackArrowMiddleHead content="My Address" />
      </div>
      <div className="media-border">
        <Field
          icon={<i className="fa-light fa-house"></i>}
          text="Hem"
          subText="Nordkapsvägen 1, 136 57 Vega"
          submitbutton={<i className="fa-light fa-pen-line fa-xs"></i>}
        />
        <Field
          icon={<i className="fa-light fa-suitcase"></i>}
          text="Stockholms kontoret"
          subText="Nordkapsvägen 1, 136 57 Vega"
          submitbutton={<i className="fa-light fa-pen-line fa-xs"></i>}
        />
        <Field
          icon={<i className="fa-light fa-location-dot fa-lg"></i>}
          text="Arboga kontoret"
          subText="Nordkapsvägen 1, 136 57 Vega"
          submitbutton={<i className="fa-light fa-pen-line fa-xs"></i>}
        />
        <div className="new-address-box">
          <NavLink to="/newaddress" className="sign-up-link">
            <i className="fa-sharp fa-light fa-plus"></i>
          </NavLink>
          <p>Add a new address</p>
        </div>
      </div>
    </div>
  );
};

export default MyAddress;
