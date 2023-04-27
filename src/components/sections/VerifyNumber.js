import React from "react";
import BackArrowMiddleHead from "../individuals/BackArrowMiddleHead";

const VerifyNumber = () => {
  const handleSubmit = () => {
    console.log("hej");
  };

  return (
    <div className="container verify-number">
      <div>
        <BackArrowMiddleHead content="Verify your phone number" />
      </div>
      <div className="media-border container">
      <div className="text-center">
        <p>Enter your OTP code here.</p>
      </div>
      <div className="d-flex justify-content-center align-items-center digit-group">
        <form onSubmit={handleSubmit} className="position-relative">
          <div className="text-center">
            <div
              id="otp"
              className="inputs d-flex flex-row justify-content-center mt-2"
            >
              <input
                className="m-1 text-center form-control"
                type="text"
                id="first"
                maxLength="1"
                minLength="1"
                required
              />
              <input
                className="m-1 text-center form-control"
                type="text"
                id="second"
                maxLength="1"
                minLength="1"
                required
              />
              <input
                className="m-1 text-center form-control"
                type="text"
                id="third"
                maxLength="1"
                minLength="1"
                required
              />
              <input
                className="m-1 text-center form-control"
                type="text"
                id="fourth"
                maxLength="1"
                minLength="1"
                required
              />
              <input
                className="m-1 text-center form-control"
                type="text"
                id="fifth"
                maxLength="1"
                minLength="1"
                required
              />
            </div>
          </div>
          <div className="text-center mt-3">
            Didn't receive the OPT? <href>Resend.</href>
          </div>
          <button className="basebtn" type="submit">
            Verify
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default VerifyNumber;
