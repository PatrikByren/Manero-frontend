import React, { useState } from 'react';
import Header from '../../components/sections/Header'
import card1 from "../../asset/images/card1.png";
import card2 from "../../asset/images/card2.png";

const PaymentMethods = () => {

    const [payment, setPayment] = useState('');

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <div className='media-border'>
            <Header icon={"fa-solid fa-chevron-left"} title="Payment Method" />
            <div className='paymentTest'>Cards
                <div className='paymentTeste'>Add a new card  <i className='paymentPlus fa fa-plus' aria-hidden="true"></i></div>
            </div>
            <div className='paymentCardsPics'>
                <img src={card1} alt="visakort" />
                <div className='paymentCardsPicsMargin'>
                    <img src={card2} alt="visakort" />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Apple Payment
                    <input type="text" value={payment} onChange={handlePaymentChange} className='inputPayment' />
                </label>
                <label>
                    Pay Payl
                    <input type="etext" value={payment} onChange={handlePaymentChange} className='inputPayment' />
                </label>
                <label>
                    Apple Payment
                    <input type="etext" value={payment} onChange={handlePaymentChange} className='inputPayment' />
                </label>
                <button className='formBtn' type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default PaymentMethods;