import React from 'react'
import Header from '../../components/sections/Header';
import card3 from "../../asset/images/card3.png";

const AddNewCardView = () => {
    return (
        <div className='myprofile'>
            <Header icon={"fa-solid fa-chevron-left"} title="Add a new card" />
            <div className='paymentCardsPics'>
                <img src={card3} alt="visakort" />
            </div>
            <div className="media-border mx-auto d-flex">
                <div className="field-box">
                </div>
            </div>
        </div>
    )
}

export default AddNewCardView;