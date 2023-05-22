import React from 'react'
import { useCartContext } from '../../context/Shoppingcartcontext/CartContext'
import axios from 'axios';

const CartView = () => {
    const {items} = useCartContext();
    const url = "https://manero.azurewebsites.net/api/Order";
    const data = {
        userId: "testId",
        customerFirstName: "testname",
        customerLastName: "testName2",
        productItems: items,
        address: "testaddress",
        city: "stockholm",
        postalcode: "12253"
    }
const onSubmit = () => {
    axios.post(url, data)
    .then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });
}

  return (
    <div>
    {items.map(item => {
       return <div key={item.id}>{item.quantity} x {item.price}</div>
    })}
    <button className="basebtn" onClick={onSubmit}>Place Order</button>
    
    </div>
    
  )
}

export default CartView