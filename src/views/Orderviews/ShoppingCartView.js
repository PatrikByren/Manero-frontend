import React, { useState } from 'react';
import Header from "../../components/sections/Header";
import cartproductpic from '../../asset/images/cartproductpic.png';
import { Button } from 'react-bootstrap';
import MenuBar from '../../components/sections/MenuBar';

const ShoppingCartView = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className='container'>
      <div className='mt-4'>
        <Header icon={"fa-solid fa-chevron-left"} title={"Order"} righticon={"fal fa-shopping-bag"} />
      </div>
      <div class="flex-grow-1 border-top border-2"></div>
      <div className='asdf'>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='row'>
            <div className='col-4 text-start'>
              <img src={cartproductpic} alt="asdf" />
            </div>
            <div className='col-3 text-center'>
              <p>Handbag $15.98 Size:- Color: Black</p>
            </div>
            <div className='col m-3 text-end'>
              <Button variant="primary" size="sm" onClick={handleIncrement}>+</Button>
              <span className="mx-2">{count}</span>
              <Button variant="primary" size="sm" onClick={handleDecrement}>-</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='asdf'>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='row'>
            <div className='col-4 text-start'>
              <img src={cartproductpic} alt="asdf" />
            </div>
            <div className='col-3 text-center'>
              <p>Summer dress $36.00 Size: M Color: Pink</p>
            </div>
            <div className='col m-3 text-end'>
              <Button variant="primary" size="sm" onClick={handleIncrement}>+</Button>
              <span className="mx-2">{count}</span>
              <Button variant="primary" size="sm" onClick={handleDecrement}>-</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-grow-1 border-top border-2"></div>
      <div className='proddescrip'>
        Promocode applied <i class="checkshoppingcart fa-solid fa-check"></i>
      </div>
      <div className='asdf'>
        <div class="d-flex justify-content-between">
          <div>
            Subtotal
          </div>
          <div>
            $45.98
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div>
            Discount
          </div>
          <div>
            -4.29
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div>
            Delivery
          </div>
          <div>
            Free
          </div>
        </div>
        <div class="flex-grow-1 border-top border-2"></div>
        <div class="d-flex justify-content-between">
          <div>
            Total
          </div>
          <div>
            $41.69
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className='basebtn'>PROCEED TO CHECKOUT</button>
      </div>
      <MenuBar />
    </div>
  );
};

export default ShoppingCartView;
