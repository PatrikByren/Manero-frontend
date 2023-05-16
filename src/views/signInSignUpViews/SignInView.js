import React from "react";
import SignInForm from "../../components/sections/SignInForm";
import { useUserContext } from "../../context/profilecontext/UserContext";
import { useEffect } from "react";

const SignInView = () => {
  const { IsSignedIn } = useUserContext()
  useEffect(() => {
    IsSignedIn("/signin")
  },[]);

  return (
    <div className="container sign-in-view">
      <SignInForm />
    </div>
  );
};

export default SignInView;
