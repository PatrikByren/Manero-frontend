import React, { useState } from "react";
import InputSingel from "../individuals/InputSingel";
import BackArrowMiddleHead from "../individuals/BackArrowMiddleHead";
import { NavLink } from "react-router-dom";
import LogInIcons from "../individuals/LogInIcons";


const SignUpForm = ({ apiRoute }) => {
  const [responsData, setResponsData] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  //const [phoneNummber, setPhoneNumber] = useState("");
  const phoneNummber = "0739448454"
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorsApi, setErrorsApi] = useState([]);
  const [validPassword, setValidPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [showErrorOnSubmit, setShowErrorOnSubmit] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validPassword && validEmail && validFirstName && validLastName && password === confirmPassword) {
      const data = {
        FirstName: firstName, LastName: lastName, PhoneNumber: phoneNummber,
        Password: password, ConfirmPassword: confirmPassword, Email: email
      }
      //apiRoute = 'https://localhost:7285'
      console.log(apiRoute);
      try {
        const response = await fetch(apiRoute + '/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        console.log('Success:', response)
        setResponsData(await response.json());
        console.log('ok:', responsData)
        console.log('ok1:', responsData.errors);
        Object.keys(responsData.errors).forEach((key) => {
          setErrorsApi([...errorsApi + " | " + key + ": " + responsData.errors[key]])
          console.log(key + ": " + responsData.errors[key]);
        });

      }
      catch (error) {
        console.log(error);
      }
    }
    else {
      setShowErrorOnSubmit(true)
      if (password != confirmPassword) {
        setValidPassword(false)
      }
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
                <div className="text-danger">{responsData.errorMessage}</div>
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
        </div>
      </div>
      /</div>
  );
};
export default SignUpForm;
