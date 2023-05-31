import React from "react";
import { NavLink } from "react-router-dom";
import BackArrowMiddleHead from "../../components/individuals/BackArrowMiddleHead";
import InputSingel from "../../components/individuals/InputSingel";
import { useUserContext } from "../../context/profilecontext/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCartContext } from "../../context/Shoppingcartcontext/CartContext";

const Checkout = () => {
  const { myAddressList, GetMyAddressesResponse } = useUserContext();
  const { items, setItems, setTotalPrice, setTotalQuantity } = useCartContext();
  //const [isLoading, setIsLoading] = useState(false);
  const [shippingStreet, setShippingStreet] = useState("");
  const [shippingPostal, setShippingPostal] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const renderone = "";
  useEffect(() => {
    // ta emot info från cartview
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get("data");
    if (data) {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      setItems(parsedData);
    }
  }, [setItems]);
  useEffect(() => {
    GetMyAddressesResponse();
  }, [renderone]);

  const shippingAddress = myAddressList.find(
    (address) => address.billingAddress === true
  );

  useEffect(() => {
    if (shippingAddress) {
      setShippingStreet(shippingAddress.streetName);
      setShippingPostal(shippingAddress.postalCode);
      setShippingCity(shippingAddress.city);
    }
  }, [shippingAddress]);

  const url = "https://manero.azurewebsites.net/api/Order";
  const data = {
    productItems: items,
    address: shippingStreet,
    city: shippingCity,
    postalcode: shippingPostal,
  };
  const onSubmit = () => {
   // setIsLoading(true);
    var storageToken = sessionStorage.getItem("token");
    console.log(shippingCity);
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${storageToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          setItems([]);
          setTotalPrice(0);
          setTotalQuantity(0);
          const newData = response.data;
          const params = new URLSearchParams();
          params.append("data", JSON.stringify(newData));
          //setIsLoading(false);
          window.location.replace(`/ordersuccessful?${params.toString()}`);
        } else {
          const newData = response.data;
          const params = new URLSearchParams();
          params.append("data", JSON.stringify(newData));
          //setIsLoading(false);
          window.location.replace(`/orderfail${params.toString()}`);
        }
      })
      .catch((error) => {
        console.log(error);
        //setIsLoading(false);
      });
  };

  return (
    <div>
      <br />
      <div className="ilonasmedia2">
        <BackArrowMiddleHead content="Checkout" />
        <div className="border" />
        <div className="one-order">
          <div className="flex-container">
            <div>My order</div>
          </div>
        </div>

        <div className="border" />

        <div className="one-order orderstuff">
          {items.map((item) => (
            <div className="flex-container" key={item.id}>
              <div className="smallerletters">{item.name}</div>
              <div className="smallerletters">
                {item.quantity} x ${item.price}
              </div>
            </div>
          ))}
          <div className="flex-container">
            <div className="smallerletters">Discount</div>{" "}
            {/*om de finns promocode */}
            <div className="smallerletters">none</div>
          </div>
          <div className="flex-container">
            <div className="smallerletters">Delivery</div>
            <div className="smallerletters FREE">Free</div>
          </div>
        </div>

        <div className="border" />

        <div className="one-order">
          <div className="flex-container">
            <div>Shipping details</div>
            <NavLink to="/checkout/shipping">
              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "black" }}
              ></i>
            </NavLink>
          </div>
          <div className="flex-container">
            <div className="undertitle">
              {shippingStreet}, {shippingPostal} {shippingCity}
            </div>
          </div>
        </div>

        <div className="border" />

        <div className="one-order">
          <div className="flex-container">
            <div>Payment Methods</div>
            <div className="arrow-icon">
              <NavLink to="/checkout/payment">
                <i
                  className="fa-solid fa-chevron-right"
                  style={{ color: "black" }}
                ></i>
              </NavLink>
            </div>{" "}
          </div>
          <div className="flex-container">
            <div className="undertitle">7741 **** **** 6644</div>
          </div>
        </div>
        <div className="border" />
        <br />

        <div className="inputcontainer ">
          <div className="text-center">
            <InputSingel
              placeholder="Enter your comment"
              nameid="review"
              name="COMMENT"
              type="text"
              style={{height: 140}}
            />
          </div>
        </div>

        <button className="basebtn checkoutbtn" onClick={onSubmit}>
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
};

export default Checkout;
