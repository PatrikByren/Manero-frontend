import React, { useState } from 'react'
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead'
import InputSingel from '../../components/individuals/InputSingel'

const NewPasswordView = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className="d-flex justify-content-center mt-5" >
      <form onSubmit={handleSubmit}>
        <BackArrowMiddleHead content="Reset password" />
        <div className='media-border'>
          <div className="content text-center m-4">Enter new password and confirm.</div>
          <div className="inputcontainer">
            <div className="text-center">
              <InputSingel name="PASSWORD" nameid="password" value={password} setValue={setPassword} />
              <InputSingel name="NEW PASSWORD" nameid="confirmpassword" value={confirmPassword} setValue={setConfirmPassword} />
              <button className="basebtn" type="submit">SEND</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewPasswordView