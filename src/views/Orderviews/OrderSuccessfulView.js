import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuBar from '../../components/sections/MenuBar'
import successful from '../../asset/images/successful.png';
import { useEffect } from 'react';

const OrderSuccessful = () => {
    useEffect(() => { // ta emot info från cartview
        const urlParams = new URLSearchParams(window.location.search);
        const data = urlParams.get('data');
        if (data) {
          const parsedData = JSON.parse(data);
          console.log(parsedData);
        }
      }, []);
  return (
    <div>
        <br/>
        <div className="text-center ecart ilonasmedia">
            <img src={successful} alt="order bra" className='success-fail'/>
            <div className="line">|</div>
            <div className="title-2">
                Thank you for your order!
            </div>
            <div className="content">
                Your order will be delivered pm time. <br/> Thank you!
            </div>
            <NavLink to="/orderhistory">  
                <button className='basebtn '>
                    VIEW ORDERS
                </button>
            </NavLink>

            <NavLink to="/">
            <div className="content continueshop">
                CONTINUE SCHOPPING
            </div>
            </NavLink>
            
            <MenuBar />
        </div>
      
    </div>
  )
}

export default OrderSuccessful
