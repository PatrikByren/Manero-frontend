import React from "react";
import { useCartContext } from "../../context/Shoppingcartcontext/CartContext";
import Header from "../../components/sections/Header";
import MenuBar from "../../components/sections/MenuBar";
import EmptyCart from "../../asset/images/emptycart.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import Spinners from "../../components/ErrorMessage/Spinners";

const CartView = () => {
  const { items, totalPrice, plusOne, minusOne } = useCartContext();
  const [isLoading, setIsLoading] = useState(false);
  const handleIncrement = (product) => {
    plusOne(product.item);
  };

  const handleDecrement = (product) => {
    minusOne(product.item);
  };

  const onSubmit = () => {
    const newData = items;
          const params = new URLSearchParams();
          params.append("data", JSON.stringify(newData)); 
          setIsLoading(false)
          window.location.replace(`/checkout?${params.toString()}`);
  }


  return (
    <div>
      {items.length === 0 ? (
        <div className="text-center">
          <Header icon={"fa-sharp fa-light fa-bars"} title={"Cart"} />
          <div className=" border-top ilonasmedia">
            <img src={EmptyCart} alt="tom order" className="cartimg" />
            <div className="line">|</div>
            <div className="title-2 text-center">Your cart is empty!</div>
            <div className="content text-center">
              Looks like you haven't made <br /> your order yet.
            </div>
            <NavLink to="/">
              <button className="basebtn ">SHOP NOW</button>
            </NavLink>
            <MenuBar />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="mt-4">
            <Header
              icon={"fa-solid fa-chevron-left"}
              title={"Order"}
              righticon={"fal fa-shopping-bag"}
            />
          </div>
          <div className="flex-grow-1 border-top border-2"></div>
          <div className="d-flex flex-column justify-content-center align-items-center m-4">
            {items.map((item) => {
              return (
                <Row key={item.id}>
                  <Col m={3}>
                    <img
                      src={item.image}
                      alt="product thing"
                      className="img-fluid"
                    />
                  </Col>
                  <Col m={6} className="text-center">
                    <p>{item.name} ${item.price}</p>
                  </Col>
                  <Col m={3} className="text-right">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleIncrement({ item })}
                    >
                      +
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleDecrement({ item })}
                    >
                      -
                    </Button>
                  </Col>
                </Row>
              );
            })}
          </div>
          <div className="flex-grow-1 border-top border-2"></div>
          <div className="proddescrip">
            Promocode applied{" "}
            <i className="checkshoppingcart fa-solid fa-check"></i>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="row mt-4">
              <div className="col">
                <p>Subtotal</p>
              </div>
              <div className="col">
                <p>${totalPrice}</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            {!isLoading ? (<button className="basebtn" onClick={onSubmit}>
              PROCEED TO CHECKOUT
            </button>) : (
                <Spinners/>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;
