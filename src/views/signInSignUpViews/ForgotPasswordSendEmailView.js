import React from 'react'
import Image from '../../asset/images/keyimg.png'

const ForgotPasswordSendEmailView = () => {
  return (
    <div className='passwordbyemail'>
      <div className='title-1 m-5'>MANERO</div>
      <img src={Image} alt="unlock a key" />
      <div className='lineup30'></div>
      <div className='title-2 text-center'>Your password has been reset</div>
      <div className='content text-center'>Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum</div>
      <button className='basebtn'>DONE</button>
    </div>
  )
}

export default ForgotPasswordSendEmailView