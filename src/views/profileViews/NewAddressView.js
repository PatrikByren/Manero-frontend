import React, { useState } from 'react';
import InputSingel from '../../components/individuals/InputSingel';
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead';
import { useUserContext } from '../../context/profilecontext/UserContext';
import Spinners from '../../components/ErrorMessage/Spinners';

const NewAddressView = () => {
    const { CreateNewAddress } = useUserContext();
    const [invoiceAddress, setInvoiceAddress] = useState(true);
    const [streetAddress, setStreetAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [typeName, setTypeName]=useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInvoiceAddressChange = () => {
        setInvoiceAddress(!invoiceAddress);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
       await CreateNewAddress(typeName, streetAddress, postalCode, city, invoiceAddress)
       setInvoiceAddress(true)
       setStreetAddress("");
       setPostalCode("");
       setCity("");
       setTypeName("");
       setIsLoading(false)
    };

    return (
        <div className='NewAddressView d-flex mt-5 mb-5 justify-content-center align-item-center'>
            <BackArrowMiddleHead content="ADD NEW ADDRESS" />
            <form onSubmit={handleSubmit}>
                <div className='inputcontainer'>
                    <InputSingel name="GATADRESS" value={streetAddress} setValue={setStreetAddress} nameid="steetAddress"/>
                    <InputSingel name="POSTNUMMER" value={postalCode} setValue={setPostalCode} nameid="postalCode" />
                    <InputSingel name="STAD" value={city} setValue={setCity} nameid="city"/>
                    <InputSingel name="NAMN" placeholder="Hem adress/Landet" value={typeName} setValue={setTypeName} nameid="typeName" />
                    <div className="form-check form-switch">
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Faktura adress</label>
                        <input className="form-check-input" onChange={handleInvoiceAddressChange} type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={invoiceAddress} />
                    </div>
                </div>
                {!isLoading ? (<button className='basebtn' type="submit">Submit</button>) : (
                <Spinners/>)}
            </form>
        </div>
    );
};

export default NewAddressView;