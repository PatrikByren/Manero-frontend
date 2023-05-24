import React from 'react'
import fbicon from "../../asset/images/fbicon.png";
import twittericon from "../../asset/images/twittericon.png";
import googleicon from "../../asset/images/googleicon.png";
import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
import {useUserContext} from "../../context/profilecontext/UserContext"
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

const LogInIcons = ({value}) => {
    const { externalSignInResponse, externalSignUpResponse } = useUserContext();

    return (
       <div>
        <div className="d-flex justify-content-center imagecontainer">
            <LoginSocialFacebook appId='272597805210592'
            onResolve={(response) => {
                console.log(response)
                if (value === "signin") {
                    externalSignInResponse(response) 
                }
                else{
                    externalSignUpResponse(response)
                }
            }}>
                <FacebookLoginButton className='externalbtn'>

                </FacebookLoginButton>
            </LoginSocialFacebook>
            <LoginSocialGoogle client_id="937557523429-tpter1cdj5utnvmsnfmet2t52c9j9q4d.apps.googleusercontent.com"
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
                <GoogleLoginButton />
            </LoginSocialGoogle>
            </div>
            <img src={twittericon} alt="twitter icon" />
            <img src={googleicon} alt="google icon" />
        </div>
    )
}

export default LogInIcons