import React, { useState } from "react";
import InputSingel from '../individuals/InputSingel'
import fbicon from '../../asset/images/fbicon.png'
import twittericon from '../../asset/images/twittericon.png'
import googleicon from '../../asset/images/googleicon.png'
import BackArrowMiddleHead from "../individuals/BackArrowMiddleHead";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log("hej")
  }
  return (
    <div className="container sign-in-form">
      <div>
        <BackArrowMiddleHead content="Sign in" />
        <div class="d-flex justify-content-center mt-3">
          <div class="lineup30"></div>
        </div>
        <div className="title-1 text-center">Welcome Back!</div>
        <div className="text-center mb-4">Sign in to continue</div>
        <form onSubmit={handleSubmit}>
          <div className="inputcontainer">
            <div className="text-center">
              <InputSingel placeholder="name@domain.com"
                nameid="email" name="EMAIL" value={email}
                setValue={setEmail} />
              <InputSingel
                nameid="password" name="PASSWORD" value={password}
                setValue={setPassword} />
              <div className="remember"><div><input className="rememberme" type="checkbox" text="Remember me" id="rememberme" />
                <label htmlFor="rememberme">Remember me</label></div>
                <href>Forgot password?</href></div>

              <button className="basebtn" type="submit">SIGN IN</button>
            </div>
          </div>
        </form>
        <div className="text-center mt-3">Don't have an account? <href>Sign up.</href></div>
        <href className="guest">Or explore as guest</href>
        <div className="imagecontainer"><img src={fbicon} alt="facebook icon" /><img src={twittericon} alt="twitter icon" />
          <img src={googleicon} alt="google icon" /></div>
      </div>
    </div>
  );
};

export default SignInForm;
