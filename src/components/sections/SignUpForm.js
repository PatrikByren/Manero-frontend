import React, { useState } from "react";
import InputSingel from "../individuals/InputSingel";
import fbicon from "../../asset/images/fbicon.png";
import twittericon from "../../asset/images/twittericon.png";
import googleicon from "../../asset/images/googleicon.png";
import BackArrowMiddleHead from "../individuals/BackArrowMiddleHead";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = () => {
    console.log("hej");
  };
  return (
    <div className="container sign-in-form">
      <div>
        <BackArrowMiddleHead content="Sign up" />
        <div className="d-flex justify-content-center mt-3">
          <div className="lineup30"></div>
        </div>
        <div className="media-border">
          <div className="title-1 text-center mb-3">Sign Up</div>
          <form onSubmit={handleSubmit}>
            <div className="inputcontainer">
              <div className="text-center">
                <InputSingel
                  placeholder="Full name"
                  nameid="name"
                  name="NAME"
                  value={name}
                  setValue={setName}
                />
                <InputSingel
                  placeholder="name@domain.com"
                  nameid="email"
                  name="EMAIL"
                  value={email}
                  setValue={setEmail}
                />
                <InputSingel
                  nameid="password"
                  name="PASSWORD"
                  value={password}
                  setValue={setPassword}
                />
                <InputSingel
                  nameid="confirm-password"
                  name="CONFIRM PASSWORD"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                />
                <button className="basebtn" type="submit">
                  SIGN UP
                </button>
              </div>
            </div>
          </form>
          <div className="text-center mt-3">
            Already have an account? <href>Sign in.</href>
          </div>
          <div className="d-flex justify-content-center imagecontainer">
            <img src={fbicon} alt="facebook icon" />
            <img src={twittericon} alt="twitter icon" />
            <img src={googleicon} alt="google icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
