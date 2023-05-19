import React from 'react'
import Header from "../../components/sections/Header";
import MenuBar from '../../components/sections/MenuBar';
import cartproductpic from '../../asset/images/cartproductpic.png';


const ShoppingCartView = () => {
  return (
    <div className='container'>
      <div className='mt-5'>
        <Header icon={"fa-solid fa-chevron-left"} title={"Order"} righticon={"fal fa-shopping-bag"} />
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div className='col'>
            <img src={cartproductpic} alt="asdf" />
          </div>
          <div className='col'>
            Shoulder bag
          </div>
          <div className='col'>
            +
          </div>
        </div>
      </div>




      <div className="subtotal">
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <button className='basebtn' >
          PROCEED TO CHECKOUT
        </button>
      </div>
      <MenuBar />
    </div>
  )
}

export default ShoppingCartView
