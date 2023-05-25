import React, { useState } from 'react';
import InputSingel from '../../components/individuals/InputSingel';
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead';
import { useUserContext } from '../../context/profilecontext/UserContext';
import Spinners from '../../components/ErrorMessage/Spinners';
import ErrorModal from '../../components/ErrorMessage/ErrorModal';

const NewAddressView = () => {
    const { CreateNewAddress,errorMsg,setErrorMsg } = useUserContext();
    const [invoiceAddress, setInvoiceAddress] = useState(true);
    const [streetAddress, setStreetAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [typeName, setTypeName]=useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [validStreetAddress, setValidStreetAddress] = useState(false);
    const [validPostalCode, setValidPostalCode] = useState(false);
    const [validCity, setValidCity] = useState(false);
    const [validTypeName, setValidTypeName] = useState(false);
    const [showErrorOnSubmit, setShowErrorOnSubmit] = useState(false)



    const handleInvoiceAddressChange = () => {
        setInvoiceAddress(!invoiceAddress);
    };
    const handleSubmit = async (e) => {
        console.log(validStreetAddress,  validPostalCode,  validCity , validTypeName)
        e.preventDefault();
        setIsLoading(true)
        if (validStreetAddress && validPostalCode && validCity && validTypeName){
            setErrorMsg("")
            await CreateNewAddress(typeName, streetAddress, postalCode, city, invoiceAddress)
            if(errorMsg===""){
                console.log("no error")
                setShowErrorOnSubmit(false)
            }
            setStreetAddress("");
            setPostalCode("");
            setCity("");
            setTypeName("");
            setIsLoading(false)
            

        }
        else{
            console.log("false")
            setShowErrorOnSubmit(true)
            setIsLoading(false)
        }
    };

    return (
        <div className='NewAddressView d-flex mt-5 mb-5 justify-content-center align-item-center'>
            <BackArrowMiddleHead content="ADD NEW ADDRESS" />
            <form onSubmit={handleSubmit}>
                <div className='inputcontainer'>
                    <InputSingel name="GATADRESS" value={streetAddress} setValue={setStreetAddress} nameid="streetAddress"type="text"
                    valid={validStreetAddress}setValid={setValidStreetAddress}showError={showErrorOnSubmit}setShowError={setShowErrorOnSubmit}/>
                    <InputSingel name="POSTNUMMER" value={postalCode} setValue={setPostalCode} nameid="postalCode" type="text"
                                      valid={validPostalCode}setValid={setValidPostalCode}showError={showErrorOnSubmit}setShowError={setShowErrorOnSubmit}/>
                    <InputSingel name="STAD" value={city} setValue={setCity} nameid="city" type="text"
                                      valid={validCity}setValid={setValidCity}showError={showErrorOnSubmit}setShowError={setShowErrorOnSubmit}/>
                    <InputSingel name="NAMN" placeholder="Hem adress/Landet" value={typeName} setValue={setTypeName} nameid="typename" type="text"
                                      valid={validTypeName}setValid={setValidTypeName}showError={showErrorOnSubmit}setShowError={setShowErrorOnSubmit}/>
                    <div className="form-check form-switch">
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Faktura adress</label>
                        <input className="form-check-input" onChange={handleInvoiceAddressChange} type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={invoiceAddress} />
                    </div>
                </div>
                {!isLoading ? (<button className='basebtn' type="submit">Submit</button>) : (
                <Spinners/>)}
            </form>
            <ErrorModal headline="ERRORS:" content={errorMsg} setErrorMsg={setErrorMsg}/>
        </div>
    );
};

export default NewAddressView;