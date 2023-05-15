import { createContext, useContext, useState } from "react"

const SignInContext = createContext();

export const useSignInContext = () => {
    return useContext(SignInContext)
}

export const SignInProvider = ({children}) => {
    const [profile, setProfile] = useState({email: "", })
    const [token, setToken] = useState("");

    const handleResponse = (response) => {
        sessionStorage.setItem('token', response)
    }

    const getProfile = () => {
        //var token = sessionStorage.getItem
        //setProfile(JSON.parse(sessionStorage.getItem('profile')))
    }

    const signIn = async (email, password) => {
        
        try {
            const response = await fetch('https://localhost:7285/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Email: "patrik.byren@hotmail.com", Password:"Bytmig123!"})
            })
            console.log('Success:', response)
            setToken(await response.text());
            handleResponse(token);
            console.log('ok resp:', token)
            return token;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    return <SignInContext.Provider value = {{ handleResponse, getProfile, signIn, profile }}>
        {children}
    </SignInContext.Provider>
}