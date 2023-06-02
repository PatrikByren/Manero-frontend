import React, { useState, useEffect } from "react";
import BackArrowMiddleHead from "../../components/individuals/BackArrowMiddleHead";
import { useUserContext } from "../../context/profilecontext/UserContext";

const CheckoutShipping = () => {
  const { myAddressList, GetMyAddressesResponse } = useUserContext();
  const [selectedOption, setSelectedOption] = useState(null);
  const renderone = "";

  useEffect(() => {
    GetMyAddressesResponse();
  }, [renderone]);

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedOption((prevSelectedOption) => {
      if (prevSelectedOption === value) {
        return null; // Avmarkera om samma knapp klickas igen
      } else {
        return value; // Markera den klickade knappen
      }
    });
  };

  return (
    <div>
      <br />
      <div className="ilonasmedia2">
        <BackArrowMiddleHead content="Shipping details" />
        <div className="border" />
        {myAddressList.map((address, index) => {
          return (
            <div className="one-order" key={index}>
              <div className="flex-container">
                <div>Hem</div>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleRadioChange}
                  />
                </label>
              </div>
              <div className="flex-container">
                <div className="undertitle">{address.streetName}, {address.postalCode}</div>
              </div>
            </div>
          );
        })}

        <div className="border" />
{/* 
        <div className="one-order">
          <div className="flex-container">
            <div>Kontoret</div>
            <label>
              <input
                type="radio"
                name="option"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleRadioChange}
              />
            </label>
          </div>
          <div className="flex-container">
            <div className="undertitle">Stockholmsvägen 1, 12 345</div>
          </div>
        </div>
        <div className="border" /> */}

        <label className="checkbox">
          <input
            className="checkboxinput"
            type="checkbox"
            name="location"
            value="checkbox"
            checked={selectedOption === "checkbox"}
            onChange={handleRadioChange}
          />
          Use current Location
        </label>
      </div>
    </div>
  );
};

export default CheckoutShipping;
