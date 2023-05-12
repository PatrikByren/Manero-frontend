import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from "../../components/sections/Header";
import MenuBar from '../../components/sections/MenuBar';
import EmptyCart from '../../asset/images/emptycart.png';

const EmptyCartView = () => {
    return (
        <div className="text-center ecart"> 
            <Header icon={"fa-sharp fa-light fa-bars"} title={"Cart"} />
            <div className=' border-top ilonasmedia'>
                <img src={EmptyCart} alt="tom order" className='cartimg' />
                <div className="line">|</div>
                <div className="title-2 text-center">
                    Your cart is empty!
                </div>
                <div className="content text-center">
                    Looks like you haven't made <br /> your order yet.
                </div>
                <NavLink to="/">
                    <button className='basebtn '>
                        SHOP NOW
                    </button>
                </NavLink>

            </div>
            <MenuBar />
        </div>
    );
 };
 
 
export default EmptyCartView;