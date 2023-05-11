import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from "../../components/sections/Header";
import MenuBar from '../../components/sections/MenuBar';
import EmptyCart from '../../asset/images/emptycart.png';
import ShoppingCartIcon from '../../src/ShoppingCartIcon';


const EmptyCartView = ({ShoppingCartIcon}) => {
    return (
        <div className="text-center">
            <Header icon={"fa-sharp fa-light fa-bars"} title={"Cart"} />
            <img src={EmptyCart} alt="tom order" />
            <div className="line">|</div>
            <div className="title-2 text-center">
                Your cart is empty!
            </div>
            <div className="content text-center">
                Looks like you haven't made <br/> your order yet.
            </div>
            <NavLink to="/">  
                <button className='basebtn '>
                    SHOP NOW
                </button>
            </NavLink>

            
            <MenuBar />
        </div>
    );
};

export default EmptyCartView;

// bh-100 = viewport 100, ta upp 100% av ...
