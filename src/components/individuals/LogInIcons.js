import React from 'react'
import fbicon from "../../asset/images/fbicon.png";
import twittericon from "../../asset/images/twittericon.png";
import googleicon from "../../asset/images/googleicon.png";
import { LoginSocialFacebook } from 'reactjs-social-login';
import {useUserContext} from "../../context/profilecontext/UserContext"
import { FacebookLoginButton } from 'react-social-login-buttons';

const LogInIcons = ({value}) => {
    const { externalSignInResponse, externalSignUpResponse } = useUserContext();

    return (
        <div className="d-flex justify-content-center imagecontainer">
            <LoginSocialFacebook appId='272597805210592'
            onResolve={(response) => {
                console.log(response)
                if (value === "signin") {
                    externalSignUpResponse(response)
                }
                else{
                    externalSignInResponse(response) 
                }
            }}>
                <FacebookLoginButton className='externalbtn'>

                </FacebookLoginButton>
            </LoginSocialFacebook>
            <img src={twittericon} alt="twitter icon" />
            <img src={googleicon} alt="google icon" />
            
        </div>
    )
}

export default LogInIcons