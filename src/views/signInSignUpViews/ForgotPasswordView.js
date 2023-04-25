import React from 'react'
import InputSingel from "../../components/individuals/InputSingel"

const ForgotPasswordView = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
      <form onSubmit={handleSubmit}>
        <div className="inputcontainer">
        <div className="text-center">
          <InputSingel name="EMAIL" nameid="email" example="name@domain.com"/>
          <button className="basebtn" type="submit">SEND</button>
        </div>
        </div>
    </form>
    
  )
}

export default ForgotPasswordView