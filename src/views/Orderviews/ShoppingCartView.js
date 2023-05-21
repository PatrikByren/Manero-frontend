import React, { useState } from 'react';
import Header from "../../components/sections/Header";
import MenuBar from '../../components/sections/MenuBar';
import cartproductpic from '../../asset/images/cartproductpic.png';
import { Row, Col, Button } from 'react-bootstrap';

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
      <div className='d-flex justify-content-center align-items-center m-4'>
        <Row>
          <Col m={3}>
            <img src={cartproductpic} alt="Image" className="img-fluid" />
          </Col>
          <Col m={6} className="text-center">
            <p>Shoulder bag Shoulder bag Shoulder bag Shoulder bag</p>
          </Col>
          <Col m={3} className="text-right">
            <Button variant="primary" size="sm" onClick={handleIncrement}>+</Button>
            <span className="mx-2">{count}</span>
            <Button variant="primary" size="sm" onClick={handleDecrement}>-</Button>
          </Col>
        </Row>
      </div>
      <div class="flex-grow-1 border-top border-2"></div>
      <div className='proddescrip'>
        Promocode applied <i class="checkshoppingcart fa-solid fa-check"></i>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <div class="row mt-4">
          <div className='col'>
            <p>Subtotal</p>
          </div>
          <div className='col'>
            <p>$45.98</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className='basebtn'>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default ShoppingCartView
