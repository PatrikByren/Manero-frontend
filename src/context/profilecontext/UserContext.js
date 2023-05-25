import { createContext, useContext, useEffect, useState } from "react"
import jwtDecode from "jwt-decode";

//profile = given_name, family_name, email, role, DisplayName, nbf, exp, iaf, iss, aud.

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const [profile, setProfile] = useState({})
    const [errorMsg, setErrorMsg] = useState("")
    const [token, setToken] = useState("");
    const [myAddressList, setMyAddressList] = useState([]);
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
        if(url !== "/signin"){
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
            const respnsData = await response.json();
            console.log(respnsData)
            setToken(await respnsData.token);
            if(response.status === 200){
                {window.location.replace('/')}
            }
            else if(response.status === 400){
                setErrorMsg("")
                console.log(respnsData.title)
                setErrorMsg(respnsData.title);
                if (respnsData.title === undefined){
                    console.log(respnsData.statusMessage)
                    setErrorMsg(respnsData.statusMessage)
                }
            }
            else{
                console.log(respnsData.statusMessage)
                setErrorMsg(respnsData.statusMessage)
            }
        }
        catch (error) {
            console.log(error);
            setErrorMsg(error)
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
                Authorization: `Bearer ${storageToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({FirstName: firstName, LastName: lastName, PhoneNumber: phoneNumber, Location: location })
            })
            
            console.log(responses)
            setToken(await responses.text());
            if(responses.status === 200){
                window.location.replace('/myprofile')
            }
        }
        catch (error) {
            console.log(error);
            setErrorMsg(error)
        }
    }

    //EXTERNAL 
    const externalSignInResponse = async (request) =>{
               console.log(request)
        try {
            const response = await fetch('https://localhost:7285/api/auth/login/external', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Email: request.data.email, CreatedBy: request.provider})
            })
            console.log(response)
            const respnsData = await response.json();
            setToken(await respnsData.token);
            if(response.status === 200){
                window.location.replace('/')
            }
        }
        catch (error) {
            console.log(error);
            setErrorMsg(error)
            return error;
        }
    }
    const externalSignUpResponse = async (request) => {
        try {
            const response = await fetch('https://localhost:7285/api/auth/create/external', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({Email: request.data.email, Password: "external", ConfirmPassword: "external", FirstName: request.data.first_name, LastName: request.data.last_name, CreatedBy: request.provider, ImageUrl: request.data.picture.data.url})
            })
            console.log('Success:', response)
             const respnsData = await response.json();
            setToken(await respnsData.token);
            if(response.status === 200){
                window.location.replace('/accountcreated')
            }
            if(response.status === 201){
                window.location.replace('/accountcreated')
            }
            }catch (error) {
                console.log(error);
                setErrorMsg(error)
                return error;
            };
    }

    const signUpResponse = async (firstName,lastName,phoneNummber,password,confirmPassword,email) => {
          const data = {
            FirstName: firstName, LastName: lastName, PhoneNumber: phoneNummber,
            Password: password, ConfirmPassword: confirmPassword, Email: email, CreatedBy: "MANERO"}
          try {
            const response = await fetch('https://localhost:7285/api/auth/create', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            const respnsData = await response.json();
            console.log(respnsData)
            setToken(await respnsData.token);
            if(response.status === 200){
                window.location.replace('/accountcreated')
            }
            else if(response.status === 201){
                window.location.replace('/accountcreated')
            }
            else if(response.status === 400){
                setErrorMsg("")
                console.log(respnsData.title)
                setErrorMsg(respnsData.title);
                if (respnsData.title === undefined){
                    console.log(respnsData.statusMessage)
                    setErrorMsg(respnsData.statusMessage)
                }
            }
            else{
                console.log(respnsData.statusMessage)
                setErrorMsg(respnsData.statusMessage)
            }
        }
        catch (error) {
            console.log(error);
            setErrorMsg(error)
            return error;
        }
        }

    //ADDRESSES
    const GetMyAddressesResponse = async () => {
        var storageToken = sessionStorage.getItem('token');
        try {
            const response = await fetch('https://localhost:7285/api/Address/myaddresses', {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${storageToken}`    
                //'Content-Type': 'application/json'
              },
              //body: JSON.stringify({})
            })
            console.log('respons:', response)
            const respnsData = await response.json();
            console.log(respnsData.addressList)
            setMyAddressList(await respnsData.addressList);
            if(response.status === 400){
                setMyAddressList([]);
                if (respnsData.title === undefined){
                    setMyAddressList([]);
                }
            }
            return myAddressList;
            }catch (error) {
                console.log(error);
                return error;
            };
    }
    
    const RemoveMyAddress = async (item,index) => {
        var storageToken = sessionStorage.getItem('token');
        try {
            const response = await fetch('https://localhost:7285/api/Address', {
              method: 'PUT',
              headers: {
                Authorization: `Bearer ${storageToken}`,    
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({TagName: item.tagName, StreetName: item.streetName, PostalCode: item.postalCode, City: item.city})
            })
            console.log('respons:', response)
            const respnsData = await response.json();
            if(response.status === 200){
            setMyAddressList(myAddressList.filter((_, i) => i !== index));
            }
            if(response.status === 400){
                setErrorMsg("")
                console.log(respnsData.title)
                setErrorMsg(respnsData.title);
                if (respnsData.title === undefined){
                    console.log(respnsData.statusMessage)
                    setErrorMsg(respnsData.statusMessage)
                }
            }
            //return myAddressList;
            }catch (error) {
                console.log(error);
                setErrorMsg(error)
                return error;
            };
    }
    
    const CreateNewAddress = async (typeName, streetAddress, postalCode, city, invoiceAddress) => {
        var storageToken = sessionStorage.getItem('token');
        try {
            const response = await fetch('https://localhost:7285/api/Address', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${storageToken}`,    
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({TagName: typeName, StreetName: streetAddress, PostalCode: postalCode, City: city, BillingAddress: invoiceAddress})
            })
            const respnsData = await response.json();
            if(response.status === 200 || response.status === 201){
            
            }
            if(response.status === 400){
                setErrorMsg("")
                console.log(respnsData.title)
                setErrorMsg(respnsData.title);
                if (respnsData.title === undefined){
                    console.log(respnsData.statusMessage)
                    setErrorMsg(respnsData.statusMessage)
                }
            }
            //return myAddressList;
            }catch (error) {
                console.log(error);
                setErrorMsg(error)
                return error;
            };
    }

    return <UserContext.Provider value = {{signUpResponse,CreateNewAddress, RemoveMyAddress, GetMyAddressesResponse, myAddressList, errorMsg,setErrorMsg, IsSignedIn, 
    handleResponse, getProfile, SignIn, profile, SignOut, UpdateProfile, externalSignInResponse, externalSignUpResponse  }}>
        {children}
    </UserContext.Provider>
}