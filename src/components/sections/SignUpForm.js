import React, { useState } from "react";
import InputSingel from "../individuals/InputSingel";
import fbicon from "../../asset/images/fbicon.png";
import twittericon from "../../asset/images/twittericon.png";
import googleicon from "../../asset/images/googleicon.png";
import BackArrowMiddleHead from "../individuals/BackArrowMiddleHead";
import { NavLink } from "react-router-dom";

const SignUpForm = ({apiRoute}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNummber, setPhoneNummeer] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {FirstName:firstName,LastName:lastName,PhoneNumber:phoneNummber,
      Password:password,ConfirmPassword:confirmPassword,Email:email}
    console.log(data);
    console.log(apiRoute);
    try {
      const response = await fetch(apiRoute+'/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      console.log('Success:', response )
    }
    catch (error) {
      console.log(error);
    }
  


    
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
                  placeholder="First name"
                  nameid="firstname"
                  name="FIRST NAME"
                  value={firstName}
                  setValue={setFirstName}
                />                
                <InputSingel
                placeholder="Last name"
                nameid="lastname"
                name="LAST NAME"
                value={lastName}
                setValue={setLastName}
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
                  nameid="password"
                  name="CONFIRM PASSWORD"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                />
                <button className="basebtn" type="submit" onClick={handleSubmit}>
                  SIGN UP
                </button>
              </div>
            </div>
          </form>
          <div className="text-center mt-3">
            Already have an account?{" "}
            <NavLink to="/signin" className="sign-up-link">
              Sign in.
            </NavLink>
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
