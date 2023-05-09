import React from 'react'
import fbicon from "../../asset/images/fbicon.png";
import twittericon from "../../asset/images/twittericon.png";
import googleicon from "../../asset/images/googleicon.png";

const LogInIcons = () => {
    return (
        <div className="d-flex justify-content-center imagecontainer">
            <img src={fbicon} alt="facebook icon" />
            <img src={twittericon} alt="twitter icon" />
            <img src={googleicon} alt="google icon" />
            
        </div>
    )
}

export default LogInIcons