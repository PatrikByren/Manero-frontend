import BackArrowMiddleHead from "../individuals/BackArrowMiddleHead";
import InputSingel from "../individuals/InputSingel";
import React, { useState } from "react";

const ConfirmNumber = () => {
  const [number, setNumber] = useState("");
  const handleSubmit = () => {
    console.log("hej");
  };
  return (
    <div className="container confirm-number">
      <div>
        <BackArrowMiddleHead content="Verify your phone number" />
      </div>
      <div className="media-border">
      <div className="message">
        We have sent you an SMS with a code to number {number}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputcontainer">
          <div className="text-center">
            <InputSingel
              nameid="phone"
              name="PHONE NUMBER"
              value={number}
              setValue={setNumber}
            />

            <button className="basebtn" type="submit">
              CONFIRM
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ConfirmNumber;
