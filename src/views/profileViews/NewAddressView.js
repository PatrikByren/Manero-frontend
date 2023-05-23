import React, { useState } from 'react';
import InputSingel from '../../components/individuals/InputSingel';
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead';

const NewAddressView = () => {
    const [invoiceAddress, setInvoiceAddress] = useState(true)

    const handleInvoiceAddressChange = () => {
        setInvoiceAddress(!invoiceAddress);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hej");
    };

    return (
        <div className='NewAddressView d-flex mt-5 mb-5 justify-content-center align-item-center'>
            <BackArrowMiddleHead content="ADD NEW ADDRESS" />
            <form onSubmit={handleSubmit}>
                <div className='inputcontainer'>
                    <InputSingel name="GATADRESS" />
                    <InputSingel name="POSTNUMMER" />
                    <InputSingel name="STAD" />
                    <InputSingel name="NAMN" placeholder="Hem adress/Landet" />
                    <div className="form-check form-switch">
                        <label className="form-check-label" for="flexSwitchCheckChecked">Faktura adress</label>
                        <input className="form-check-input" onChange={handleInvoiceAddressChange} type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={invoiceAddress} />
                    </div>
                </div>
                <button className='basebtn' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewAddressView;