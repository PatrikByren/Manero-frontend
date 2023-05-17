import React from 'react'
import Header from "../../components/sections/Header";
import MenuBar from '../../components/sections/MenuBar';


const ShoppingCartView = () => {
  return (
    <div className='text-center ecart'>
      <Header icon={"fa-sharp fa-light fa-bars"} title={"Checkout"} />
      <div className="shoppingcart">

      </div>




      <div className="subtotal">
      </div>
      <button className='basebtn' >
        PROCEED TO CHECKOUT
      </button>
      <MenuBar />
    </div>
  )
}

export default ShoppingCartView
