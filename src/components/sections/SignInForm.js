import React, { useState, useEffect } from "react";
import InputSingel from "../individuals/InputSingel";
import fbicon from "../../asset/images/fbicon.png";
import twittericon from "../../asset/images/twittericon.png";
import googleicon from "../../asset/images/googleicon.png";
import BackArrowMiddleHead from "../individuals/BackArrowMiddleHead";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/profilecontext/UserContext";
import LogInIcons from "../individuals/LogInIcons";
import ErrorModal from "../ErrorMessage/ErrorModal";
import Spinners from "../ErrorMessage/Spinners";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { SignIn, errorMsg, setErrorMsg } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    SignIn(email, password);
    setEmail("")
    setPassword("")
  };
  useEffect(() => {
    setIsLoading(false);
  }, [errorMsg]);
  return (
    <div className="container sign-in-form">
      
      <div>
        <BackArrowMiddleHead content="Sign in" />
        <div className="d-flex justify-content-center mt-3">
          <div className="lineup30"></div>
        </div>
        <div className="media-border">
          <div className="title-1 text-center">Welcome Back!</div>
          <div className="text-center mb-4">Sign in to continue</div>
          <form onSubmit={handleSubmit}>
            <div className="inputcontainer">
              <div className="text-center">
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
                  type="password"
                  value={password}
                  setValue={setPassword}
                />
                <div className="remember">
                  <div>
                    <input
                      className="rememberme"
                      type="checkbox"
                      text="Remember me"
                      id="rememberme"
                    />
                    <label htmlFor="rememberme">Remember me</label>
                  </div>
                  <NavLink to="/forgotpassword" className="sign-up-link">
                    Forgot password?
                  </NavLink>
                </div>

                {!isLoading ? (<button className="basebtn" type="submit">
                  SIGN IN
                </button>) : (
                <Spinners/>)}
              </div>
            </div>
          </form>
          <div className="text-center mt-3">
            Don't have an account?{" "}
            <NavLink to="/signup" className="sign-up-link">
              Sign up.
            </NavLink>
          </div>
          <div className="d-flex justify-content-center">
            <NavLink to="/" className="guest">
              Or explore as guest
            </NavLink>
          </div>
          <LogInIcons value="signin"/>
        </div>
      </div>
      <ErrorModal headline="ERRORS:" content={errorMsg} setErrorMsg={setErrorMsg}/>
    </div>
  );
};

export default SignInForm;
