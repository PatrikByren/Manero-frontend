import React, { useState } from 'react'


const ProfileIntro = () => {
    const [image, setImage] = useState({})
    return (
        <div>
            <div className='lineup30'></div>
            {image ? (<div className='profileImage'><i class="fa-light fa-pen-line"></i></div>) : (<div> <img className='profileImage' src={image} alt="ProfileImages" /><i class="fa-light fa-pen-line"></i></div>)}
            <div className='title-2 text-center'>Firstname Lastname</div>
            <div className='text-center'>name@domain.com</div>
        </div>
    )
}

export default ProfileIntro