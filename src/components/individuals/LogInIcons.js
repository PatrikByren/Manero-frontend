import React from 'react'
import { LoginSocialFacebook, LoginSocialGoogle, LoginSocialTwitter } from 'reactjs-social-login';
import {useUserContext} from "../../context/profilecontext/UserContext"
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from 'react-social-login-buttons';

const LogInIcons = ({value}) => {
    const { externalSignInResponse, externalSignUpResponse } = useUserContext();

    return (
       <div className='LogInIcons'>
        <div className="d-flex justify-content-center imagecontainer">
            <LoginSocialFacebook className='socialbtn' appId='272597805210592'
            onResolve={(response) => {
                console.log(response)
                if (value === "signin") {
                    externalSignInResponse(response) 
                }
                else{
                    externalSignUpResponse(response)
                }
            }}>
                <FacebookLoginButton className='externalbtn' style={{ borderRadius: '50%' }}>

                </FacebookLoginButton>
            </LoginSocialFacebook>
            <LoginSocialGoogle className='socialbtn' client_id="937557523429-tpter1cdj5utnvmsnfmet2t52c9j9q4d.apps.googleusercontent.com"
                scope="openid profile"
                onResolve={(response) => {
                    console.log(response)
                    if (value === "signin") {
                        externalSignInResponse(response) 
                    }
                    else{
                        externalSignUpResponse(response)
                    }
                }}>
                <GoogleLoginButton className='externalbtn' style={{ borderRadius: '50%' }}/>
            </LoginSocialGoogle>
            <LoginSocialTwitter className='socialbtn'>
                <TwitterLoginButton className='externalbtn' style={{ borderRadius: '50%' }}/>
            </LoginSocialTwitter>
            </div>
        </div>
    )
}

export default LogInIcons