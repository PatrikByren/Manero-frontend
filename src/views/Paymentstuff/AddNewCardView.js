import React, { useState } from 'react'
import Header from '../../components/sections/Header';
import card3 from "../../asset/images/card3.png";

const AddNewCardView = () => {
    const [payment, setPayment] = useState('');

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleSubmit} className="card shadow col-11 col-lg-4" noValidate>
                <Header icon={"fa-solid fa-chevron-left"} title="Add a new card" />
                <div className='paymentCardsPics'>
                    <img src={card3} alt="visakort" />
                </div>
                <div className="card-body px-5 py-4">
                    <div className="mb-3 small text-danger text-center">
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input value={payment} onChange={(e) => setPayment(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Card Number</label>
                        <input value={payment} onChange={(e) => setPayment(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className='row'>
                        <div className="col">
                            <label className="form-label">MM/YY</label>
                            <input value={payment} onChange={(e) => setPayment(e.target.value)} type="text" className="form-control" />
                        </div>
                        <div className="col-3">
                            <label className="form-label">CVV</label>
                            <input value={payment} onChange={(e) => setPayment(e.target.value)} type="password" className="form-control" />
                        </div>
                    </div>
                </div>
                <button className='basebtn'>SAVE CARD</button>
            </form>
        </div>
    )
}

export default AddNewCardView;