import React from 'react'
import Header from '../../components/sections/Header'
import card1 from "../../asset/images/card1.png";
import card2 from "../../asset/images/card2.png";
import Field from "../../components/individuals/Field";

const PaymentMethods = () => {
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
            <div className="media-border mx-auto d-flex">
                <div className="field-box">
                    <Field
                        text="Apple Pay"
                        submitbutton={<i className="fa-light fa-pen-line fa-xs"></i>}
                    />
                    <Field
                        text="Pay Pal"
                        submitbutton={<i className="fa-light fa-pen-line fa-xs "></i>}
                    />
                    <Field
                        text="Payoneer"
                        submitbutton={<i className='paymentPlus fa fa-plus' aria-hidden="true"></i>}
                    />
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods;