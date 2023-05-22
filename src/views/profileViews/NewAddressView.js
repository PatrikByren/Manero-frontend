import React from 'react';
import InputSingel from '../../components/individuals/InputSingel';
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead';

const NewAddressView = () => {
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
                    <InputSingel name="NAMN" placeholder="Faktura adress/Leverans adress" />
                </div>
                <button className='basebtn' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewAddressView;