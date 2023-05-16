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
    useEffect(() => {
        TokenDecoder()
    },[token]);
    
    const handleResponse = () => {
        sessionStorage.setItem('token', token)
    }

    const getProfile = () => {
        var decoded = jwtDecode(sessionStorage.getItem('token'));
        setProfile(decoded)
    }

    const IsSignedIn = (url) => {
        var result = sessionStorage.getItem('token')
        console.log("IsSignedIn")
        if(url != "/signin"){
            if(result === null)
                {window.location.replace('/signin')}
            else{
                getProfile()
                return true
            }
        } else{
            if(result != null){
                {window.location.replace('/myprofile')}
            }
        }
    }

    const IsAdminSignedIn = () => {
    }

    const SignOut = () => {
        sessionStorage.clear()
        window.location.replace('/')
    }

    const TokenDecoder = () => {
        try{
            // gör denna kod samma som den i getProfile?
            var decoded = jwtDecode(token)
            setProfile(decoded)
            handleResponse()
        } catch (error) {}
    }
  
    
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
            if(response.status === 200){
                {window.location.replace('/')}
            }
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    const UpdateProfile = async ( firstName, lastName, phoneNumber, location ) => {
        var storageToken = sessionStorage.getItem('token');
        console.log(storageToken)
        //console.log(storageToken)
        try {
            const responses = await fetch('https://localhost:7285/api/user/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${storageToken}`
            },
            body: JSON.stringify({FirstName: firstName, LastName: lastName, PhoneNumber: phoneNumber, Location: location })
            })
            
            console.log(responses)
            
            return responses
        }
        catch (error) {
            console.log(error);
            
            return error;
        }
    }

    return <UserContext.Provider value = {{ IsSignedIn, handleResponse, getProfile, SignIn, profile, SignOut, UpdateProfile }}>
        {children}
    </UserContext.Provider>
}