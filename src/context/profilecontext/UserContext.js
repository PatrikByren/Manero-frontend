import { createContext, useContext, useEffect, useState } from "react"
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

//profile = given_name, family_name, email, role, DisplayName, nbf, exp, iaf, iss, aud.

const UserContext = createContext();
const apiRoute = "https://manero.azurewebsites.net";
export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
    const [profile, setProfile] = useState({})
    const [errorMsg, setErrorMsg] = useState("")
    const [token, setToken] = useState("");
    const [myAddressList, setMyAddressList] = useState([]);

    useEffect(() => {
        TokenDecoder()
    }, [token]);

    const handleResponse = () => {
        sessionStorage.setItem('token', token)
    }

    const getProfile = () => {
        var decoded = jwtDecode(sessionStorage.getItem('token'));
        setProfile(decoded)
    }

    const IsSignedIn = () => {
        var result = sessionStorage.getItem('token')


        if (result) {
            return true
        }
        return false
        // if(url !== "/signin"){
        //     if(result === null)
        //         {window.location.replace('/signin')}
        //     else{
        //         getProfile()
        //         return true
        //     }
        // } else{
        //     if(result != null){
        //         {window.location.replace('/myprofile')}
        //     }
        // }
    }



    const SignOut = () => {
        sessionStorage.clear()
        window.location.replace('/')
    }

    const TokenDecoder = () => {
        try {
            // gör denna kod samma som den i getProfile?
            var decoded = jwtDecode(token)
            setProfile(decoded)
            handleResponse()
        } catch (error) { }
    }


    const SignIn = async (email, password) => {
        try {
            const response = await fetch(apiRoute + '/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Email: email, Password: password })
            })
            const respnsData = await response.json();
            setToken(await respnsData.token);
            if (response.status === 200) {
                window.location.replace('/')
            }
            else if (response.status === 400) {
                setErrorMsg("")
                setErrorMsg(respnsData.title);
                if (respnsData.title === undefined) {
                    setErrorMsg(respnsData.statusMessage)
                }
                else {
                    setErrorMsg(respnsData.statusMessage)
                }
            }
        }
        catch (error) {
            return error;
        }
    }

    const UpdateProfile = async (firstName, lastName, phoneNumber, location) => {
        var storageToken = sessionStorage.getItem('token');
        try {
            const responses = await fetch(apiRoute + '/api/user/update', {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${storageToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ FirstName: firstName, LastName: lastName, PhoneNumber: phoneNumber, Location: location })
            })
            const respnsData = await responses.text();
            setToken(respnsData);
            if (responses.status === 200) {
                window.location.replace('/myprofile')
            }
            else if (responses.status === 400) {
                setErrorMsg("")
                setErrorMsg(respnsData.title);
                if (respnsData.title === undefined) {
                    setErrorMsg(respnsData.statusMessage)
                }
                else {
                    setErrorMsg(respnsData.statusMessage)
                }
            }
        }
        catch (error) {
            console.log(error)
            setErrorMsg(error)
        }
    }

    //EXTERNAL 
    const externalSignInResponse = async (request) => {
        try {
            const response = await fetch(apiRoute + '/api/auth/login/external', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Email: request.data.email, CreatedBy: request.provider })
            })
            const respnsData = await response.json();
            setToken(await respnsData.token);
            if (response.status === 200) {
                window.location.replace('/')
            }

            else {
                setErrorMsg(respnsData.title);
                if (respnsData.title === undefined) {
                    setErrorMsg(respnsData.statusMessage)
                    if (respnsData.statusMessage === undefined) {
                        setErrorMsg("Something went wrong")
                    }
                }
            }
        }
        catch (error) {
            setErrorMsg(error)
            return error;
        }
    }
    const externalSignUpResponse = async (request) => {
        console.log(request)
        if (request.provider === "google") {
            var dataRequest = { Email: request.data.email, Password: "external", ConfirmPassword: "external", FirstName: request.data.given_name, LastName: request.data.family_name, CreatedBy: request.provider, ImageUrl: request.data.picture }
            try {
                const response = await fetch(apiRoute + '/api/auth/create/external', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataRequest)
                })
                const respnsData = await response.json();
                setToken(await respnsData.token);
                if (response.status === 200) {
                    window.location.replace('/accountcreated')
                }
                else if (response.status === 201) {
                    window.location.replace('/accountcreated')
                }
                else {
                    setErrorMsg("Ur consent with Google Aint good enough");
                    if (respnsData.title === undefined) {
                        setErrorMsg(respnsData.statusMessage)
                        if (respnsData.statusMessage === undefined) {
                            setErrorMsg("Something went wrong")
                        }
                    }
                }
            } catch (error) {
                setErrorMsg(error)
                return error;
            };

        }
        if (request.provider === "facebook") {

            try {
                const response = await fetch(apiRoute + '/api/auth/create/external', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ Email: request.data.email, Password: "external", ConfirmPassword: "external", FirstName: request.data.first_name, LastName: request.data.last_name, CreatedBy: request.provider, ImageUrl: request.data.picture.data.url })
                })
                const respnsData = await response.json();
                setToken(await respnsData.token);
                if (response.status === 200) {
                    window.location.replace('/accountcreated')
                }
                else if (response.status === 201) {
                    window.location.replace('/accountcreated')
                }
                else {
                    setErrorMsg(respnsData.title);
                    if (respnsData.title === undefined) {
                        setErrorMsg(respnsData.statusMessage)
                        if (respnsData.statusMessage === undefined) {
                            setErrorMsg("Something went wrong")
                        }
                    }
                }
            } catch (error) {
                setErrorMsg(error)
                return error;
            };
        }
    }

    const signUpResponse = async (firstName, lastName, phoneNummber, password, confirmPassword, email) => {
        const data = {
            FirstName: firstName, LastName: lastName, PhoneNumber: phoneNummber,
            Password: password, ConfirmPassword: confirmPassword, Email: email, CreatedBy: "MANERO"
        }
        try {
            const response = await fetch(apiRoute + '/api/auth/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const respnsData = await response.json();
            setToken(await respnsData.token);
            if (response.status === 200) {
                window.location.replace('/accountcreated')
            }
            else if (response.status === 201) {
                window.location.replace('/accountcreated')
            }
            else if (response.status === 400) {
                setErrorMsg("")
                setErrorMsg(respnsData.title);
                if (respnsData.title === undefined) {
                    setErrorMsg(respnsData.statusMessage)
                }
            }
            else {
                setErrorMsg(respnsData.statusMessage)
            }
        }
        catch (error) {
            setErrorMsg(error)
            return error;
        }
    }

    //ADDRESSES
    const GetMyAddressesResponse = async () => {
        var storageToken = sessionStorage.getItem('token');
        try {
            const response = await fetch(apiRoute + '/api/Address/myaddresses', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${storageToken}`
                    //'Content-Type': 'application/json'
                },
                //body: JSON.stringify({})
            })
            const respnsData = await response.json();
            setMyAddressList(await respnsData.addressList);
            if (response.status === 400) {
                setMyAddressList([]);
                if (respnsData.title === undefined) {
                    setMyAddressList([]);
                }
            }
            return myAddressList;
        } catch (error) {
            return error;
        };
    }

    const RemoveMyAddress = async (item, index) => {
        var storageToken = sessionStorage.getItem('token');
        try {
            const response = await fetch(apiRoute + '/api/Address', {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${storageToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ TagName: item.tagName, StreetName: item.streetName, PostalCode: item.postalCode, City: item.city })
            })
            const respnsData = await response.json();
            if (response.status === 200) {
                setMyAddressList(myAddressList.filter((_, i) => i !== index));
            }
            if (response.status === 400) {
                setErrorMsg("")
                setErrorMsg(respnsData.title);
                if (respnsData.title === undefined) {
                    setErrorMsg(respnsData.statusMessage)
                }
            }
            //return myAddressList;
        } catch (error) {
            setErrorMsg(error)
            return error;
        };
    }

    const CreateNewAddress = async (typeName, streetAddress, postalCode, city, invoiceAddress) => {
        var storageToken = sessionStorage.getItem('token');
        console.log(typeName, streetAddress, postalCode, city, invoiceAddress)
        try {
            const response = await fetch(apiRoute + '/api/Address', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${storageToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ TagName: typeName, StreetName: streetAddress, PostalCode: postalCode, City: city, BillingAddress: invoiceAddress })
            })
            const respnsData = await response.json();
            console.log(respnsData)
            if (response.status === 200 || response.status === 201) {

            }
            if (response.status === 400) {
                setErrorMsg("")
                setErrorMsg(respnsData.title);
                if (respnsData.title === undefined) {
                    setErrorMsg(respnsData.statusMessage)
                }
            }
            //return myAddressList;
        } catch (error) {
            setErrorMsg(error)
            return error;
        };
    }

    //COOKIES
    const GetCookie = () => {
        return Cookies.get('cookie')
    }

    const SetCookie = ({ value }) => {
        Cookies.set('cookie', { value }, { expires: 90 })
        console.log("COOKIE SET")
    }

    const FirstTime = () => {
        const cookie = GetCookie()
        if (cookie === undefined) {
            SetCookie("first time")
            return true
        } else {
            return false
        }
    }
    return <UserContext.Provider value={{
        signUpResponse, CreateNewAddress, RemoveMyAddress, GetMyAddressesResponse, myAddressList, errorMsg, setErrorMsg, IsSignedIn,
        handleResponse, getProfile, SignIn, profile, SignOut, UpdateProfile, externalSignInResponse, externalSignUpResponse, GetCookie, SetCookie, FirstTime
    }}>
        {children}
    </UserContext.Provider>
}