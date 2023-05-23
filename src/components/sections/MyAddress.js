import React,{useEffect, useState} from "react";
import BackArrowMiddleHead from "../individuals/BackArrowMiddleHead";
import Field from "../individuals/Field";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/profilecontext/UserContext";

const MyAddress = () => {
  const {myAddressList,RemoveMyAddress, GetMyAddressesResponse} = useUserContext();
  const submithandler = (index) => {
    
    RemoveMyAddress(myAddressList[index], index);
  }
  

  useEffect(()  => {
    GetMyAddressesResponse();
  }, []);


  return (
    <div className="myaddress">
      <div>
        <BackArrowMiddleHead content="My Address" />
      </div>
      <div className="media-border mx-auto d-flex">
        <div className="field-box">
        {myAddressList.map((addresses, index) =>(
          <Field key={index}
          icon={
            addresses.billingAddress ? (
              <i className="fa-light fa-truck"></i>
            ) : (
              <i className="fa-light fa-credit-card"></i>
            )
          }
            text={addresses.tagName}
            streetAddress={addresses.streetName}
            postalCode={addresses.postalCode}
            city={addresses.city}
            deleteButton={<i className="fa-sharp fa-solid fa-trash"></i>}
            submithandler={submithandler}
            index={index}
          />
        ))}
        </div>
        <div className="new-address-box">
          <NavLink to="/myaddress/new" className="sign-up-link">
            <i className="fa-sharp fa-light fa-plus"></i>
          </NavLink>
          <p>Add a new address</p>
        </div>
      </div>
    </div>
  );
};

export default MyAddress;
