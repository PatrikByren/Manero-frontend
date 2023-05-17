import React, { useState } from 'react'
import Header from '../../components/sections/Header'
import ProfileIntro from '../../components/individuals/ProfileIntro'
import InputSingel from '../../components/individuals/InputSingel'
import { useUserContext } from '../../context/profilecontext/UserContext'
import { useEffect } from 'react'

const EditProfile = () => {
    const { profile, getProfile, IsSignedIn, UpdateProfile } = useUserContext()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("+46 73 944 84 54")
    const [location, setLocation] = useState("Vega, SVERIGE")
    const UpdateProfileHandler = async (e) =>{
        e.preventDefault()
        await UpdateProfile(firstName, lastName,phoneNumber,location);
    }
    useEffect(() => {
        IsSignedIn()
        getProfile()
      }, [])
    return (
        <div className='myprofile'>
            <form onSubmit={UpdateProfileHandler} noValidate>
                <Header icon={"fa-solid fa-chevron-left"} title="Edit profile" />
                <div className="media-border mx-auto d-flex justify-content-center">
                    <ProfileIntro />
                    <div className='inputcontainer'>
                        <InputSingel placeholder={profile.given_name} nameid="name" name="FIRST NAME" setValue={setFirstName} value={firstName}/>
                        <InputSingel placeholder={profile.family_name} nameid="name" name="LAST NAME" setValue={setLastName} value={lastName}/>
                        <InputSingel placeholder={phoneNumber} nameid="phonenumber" name="PHONENUMBER" setValue={setPhoneNumber} value={phoneNumber} />
                        <InputSingel placeholder={location} nameid="location" name="LOCATION" setValue={setLocation} value={location}/>
                        <button type='submit' className='basebtn'>SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProfile