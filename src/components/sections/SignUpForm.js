import React, { useState } from "react";
import InputSingel from "../individuals/InputSingel";
import BackArrowMiddleHead from "../individuals/BackArrowMiddleHead";
import { NavLink } from "react-router-dom";
import LogInIcons from "../individuals/LogInIcons";
import { useUserContext } from "../../context/profilecontext/UserContext";
import Spinners from "../ErrorMessage/Spinners";
import ErrorModal from "../ErrorMessage/ErrorModal";


const SignUpForm = () => {
  const { signUpResponse, errorMsg,setErrorMsg } = useUserContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  //const [phoneNummber, setPhoneNumber] = useState("");
  const phoneNummber = "0739448454"
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [showErrorOnSubmit, setShowErrorOnSubmit] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    if (validPassword && validEmail && validFirstName && validLastName && password === confirmPassword) {
      await signUpResponse(firstName,lastName,phoneNummber,password,confirmPassword,email);
      setIsLoading(false)
      }
    else {
      setShowErrorOnSubmit(true)
      setIsLoading(false)
      if (password !== confirmPassword) {
        setValidPassword(false)
      }
    }
  };
  return (
    <div className="container sign-in-form signupform">
      <div>
        <BackArrowMiddleHead content="Sign up" />
        <div className="d-flex justify-content-center mt-3">
          <div className="lineup30"></div>
        </div>
        <div className="media-border">
          <div className="title-1 text-center mb-3">Sign Up</div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="inputcontainer">
              <div className="text-center">
                <InputSingel
                  placeholder="First name"
                  nameid="firstname"
                  name="FIRST NAME"
                  value={firstName}
                  setValue={setFirstName}
                  type="text"
                  valid={validFirstName}
                  setValid={setValidFirstName}
                  showError={showErrorOnSubmit}
                  setShowError={setShowErrorOnSubmit}
                />
                <InputSingel
                  placeholder="Last name"
                  nameid="lastname"
                  name="LAST NAME"
                  value={lastName}
                  setValue={setLastName}
                  type="text"
                  valid={validLastName}
                  setValid={setValidLastName}
                  showError={showErrorOnSubmit}
                  setShowError={setShowErrorOnSubmit}
                />
                <InputSingel
                  placeholder="name@domain.com"
                  nameid="email"
                  type="email"
                  name="EMAIL"
                  value={email}
                  setValue={setEmail}
                  valid={validEmail}
                  setValid={setValidEmail}
                  showError={showErrorOnSubmit}
                  setShowError={setShowErrorOnSubmit}
                />
                <InputSingel
                  nameid="password"
                  type="password"
                  name="PASSWORD"
                  value={password}
                  setValue={setPassword}
                  valid={validPassword}
                  setValid={setValidPassword}
                  showError={showErrorOnSubmit}
                  setShowError={setShowErrorOnSubmit}
                />
                <InputSingel
                  nameid="confirmpassword"
                  type="password"
                  name="CONFIRM PASSWORD"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                />
                {!isLoading ? (<button className="basebtn" type="submit" onClick={handleSubmit}>SIGN UP</button>) : (
                <Spinners/>)}

              </div>
            </div>
          </form>
          <div className="text-center mt-3">
            Already have an account?{" "}
            <NavLink to="/signin" className="sign-up-link">
              Sign in.
            </NavLink>
          </div>
          <div className="text-center externalicons">
          Sign up with: 
          <LogInIcons value="signup"/>
          </div>
        </div>
      </div>
      <ErrorModal headline="ERRORS:" content={errorMsg} setErrorMsg={setErrorMsg}/>
      </div>
  );
};
export default SignUpForm;
