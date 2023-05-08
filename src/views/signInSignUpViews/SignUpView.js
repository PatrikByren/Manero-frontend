import React from "react";
import SignUpForm from "../../components/sections/SignUpForm";

const SignUpView = ({apiRoute}) => {
  return (
    <div className="container">
      <SignUpForm apiRoute={apiRoute}/>
    </div>
  );
};

export default SignUpView;
