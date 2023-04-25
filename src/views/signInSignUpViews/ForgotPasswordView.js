import React, { useState } from "react";
import InputSingel from "../../components/individuals/InputSingel"
import BackArrowMiddleHead from "../../components/individuals/BackArrowMiddleHead";

const ForgotPasswordView = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="forgotpassword" >
      <form onSubmit={handleSubmit}>
        <BackArrowMiddleHead content="Forgot password" />
        <div>
          <div className="content m-4">Please enter you email adress you will recive a link to create a new password via email</div>
          <div className="inputcontainer">
            <div className="text-center">
              <InputSingel name="EMAIL" nameid="email" placeholder="name@domain.com" value={email} setValue={setEmail} />
              <button className="basebtn" type="submit">SEND</button>
            </div>
          </div>
        </div>
      </form>
    </div>

  )
}

export default ForgotPasswordView