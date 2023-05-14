import React from 'react'
import Header from '../../components/sections/Header'
import MenuBar from '../../components/sections/MenuBar'

const ShoppingCartView = () => {
  return (
    <div>
      <Header icon={"fa-sharp fa-light fa-bars"} title={"Order"} />
     
      <button className='basebtn' >
        PROCEED TO CHECKOUT
      </button>
      <MenuBar />
    </div>
  )
}

export default ShoppingCartView
