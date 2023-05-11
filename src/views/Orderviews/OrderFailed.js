import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuBar from '../../components/sections/MenuBar'
import fail from '../../asset/images/fail.png';

const OrderFailed = () => {
  return (
    <div>
        <div className="text-center ecart">
            <img src={fail} alt="order nej" className='success-fail'/>
            <div className="line">|</div>
            <div className="title-2">
                Sorry! Your order has failed!
            </div>
            <div className="content">
                Something went wrong. Please try again <br/> to continue your order.
            </div>
            <NavLink to="/orderhistory">  
                <button className='basebtn '>
                    TRY AGAIN
                </button>
            </NavLink>

            <NavLink to="/myprofile">
            <div className="content continue">
                CONTINUE SCHOPPING
            </div>
            </NavLink>
            
            <MenuBar />
        </div>
      
    </div>
  )
}

export default OrderFailed
