import React from 'react'
import Header from "../../components/sections/Header";
import MenuBar from '../../components/sections/MenuBar';
import ProductItemCartList from '../../asset/images/ProductItemCartList.png';


const ShoppingCartView = () => {
  return (
    <div className='text-center ecart'>
      <Header icon={"fa-sharp fa-light fa-bars"} title={"Checkout"} />
      <div className="shoppingcart">
        <img src={ProductItemCartList} alt="product i order" className='orderproductimg' />
        <img src={ProductItemCartList} alt="product i order" className='orderproductimg' />
      </div>

      {/*         
        Produktnamn     +
        pris och rött pris      1
        Size
       Color     - */}



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
