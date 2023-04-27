import React from "react";
import Image from "../../asset/images/userimg.png";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const AccountCreated = () => {
  return (
    <div className="container account-created">
      <div className="headerinaccount">
        <Header title="MANERO" />
      </div>
      <div className="media-border">
        <div className="user-image">
          <img src={Image} alt="User"></img>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div className="lineup30"></div>
        </div>
        <div className="title-1">Account Created!</div>
        <div>
          <p className="text-center">
            Your account had been created <br></br>successfully.
          </p>
        </div>
        <NavLink to="/">
          <button className="basebtn" type="submit">
            SHOP NOW
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AccountCreated;
