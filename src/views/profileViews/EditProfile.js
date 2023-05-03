import React from 'react'
import Header from '../../components/sections/Header'
import ProfileIntro from '../../components/individuals/ProfileIntro'
import InputSingel from '../../components/individuals/InputSingel'

const EditProfile = () => {
    return (
        <div className='myprofile'>
            <form>
                <div className='inputcontainer'>
                    <Header icon={"fa-solid fa-chevron-left"} title="Edit profile" />
                    <ProfileIntro />
                    <InputSingel placeholder="namn namnsson" nameid="name" name="NAME" />
                    <InputSingel placeholder="name@domain.com" nameid="email" name="EMAIL" />
                    <InputSingel placeholder="+46 73 944 84 54" nameid="phonenumber" name="PHONENUMBER" />
                    <InputSingel placeholder="Vega, SVERIGE" nameid="location" name="LOCATION" />
                    <button className='basebtn'>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile