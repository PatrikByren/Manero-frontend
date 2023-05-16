import { createContext, useContext, useEffect, useState } from "react"
import jwtDecode from "jwt-decode";

//profile = given_name, family_name, email, role, DisplayName, nbf, exp, iaf, iss, aud.

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const [profile, setProfile] = useState({})
    const [token, setToken] = useState("");

    const handleResponse = () => {
        sessionStorage.setItem('token', token)
        
        //sessionStorage.setItem('profile', JSON.stringify(profile))
    }

    const getProfile = () => {
        
        var decoded = jwtDecode(sessionStorage.getItem('token'));
        
        setProfile(decoded)

    }

    const IsSignedIn = () => {
        var result = sessionStorage.getItem('token')
        if(result === null)
        {window.location.replace('/signin')}
        else{getProfile();}
    }

    const IsAdminSignedIn = () => {
    }
    const TokenDecoder = () => {
        try{
            var decoded = jwtDecode(token)
            setProfile(decoded)
            handleResponse()

        }        catch (error) {

        }
    }
    useEffect(() => {
        TokenDecoder()
    },[token]);
    
    const SignIn = async (email, password) => {
        
        try {
            const response = await fetch('https://localhost:7285/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Email: email, Password: password})
            })
            console.log(response)
            setToken(await response.text());
            
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    return <UserContext.Provider value = {{ IsSignedIn, handleResponse, getProfile, SignIn, profile }}>
        {children}
    </UserContext.Provider>
}