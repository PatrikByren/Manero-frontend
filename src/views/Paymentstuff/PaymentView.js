import React, { useState } from 'react';
import Header from '../../components/sections/Header'
import card1 from "../../asset/images/card1.png";

const PaymentMethods = () => {

    const [payment, setPayment] = useState('');

    /*const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    };*/


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleSubmit} className="card shadow col-11 col-lg-4" noValidate>
                <div className='paymentHeader'>
                    <Header icon={"fa-solid fa-chevron-left"} title="Payment Method" />
                </div>
                <div className='paymentTest'>Cards
                    <div className='paymentTeste'>Add a new card<i className='paymentPlus fa fa-plus' aria-hidden="true"></i></div>
                </div>
                <div className='paymentCardsPics'>
                    <img src={card1} alt="visakort" />
                </div>
                <div className="card-body px-5 py-4">
                    <div className="mb-3 small text-danger text-center">
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Apple Pay</label>
                        <input value={payment} onChange={(e) => setPayment(e.target.value)} type="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pay Pal</label>
                        <input value={payment} onChange={(e) => setPayment(e.target.value)} type="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Payoneer</label>
                        <input value={payment} onChange={(e) => setPayment(e.target.value)} type="password" className="form-control" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PaymentMethods;