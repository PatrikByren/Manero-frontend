import React from "react";
import Middle from "../individuals/Middle";
import Image from "../../asset/images/userimg.png";

const AccountCreated = () => {
  return (
    <div className="container account-created">
      <div>
        <Middle />
      </div>
      <div className="user-image">
        <img src={Image} alt="User image"></img>
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
      <button className="basebtn" type="submit">
        SHOP NOW
      </button>
    </div>
  );
};

export default AccountCreated;