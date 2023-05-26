import { createContext, useContext, useState } from "react";
//import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from 'react';
import { json } from "react-router-dom";

const CartContext = createContext();
export const useCartContext = () => {
  return useContext(CartContext);
};
// const initialCartState = {
//     items: [],
//     totalItems: 0,
//     totalPrice: 0
// }

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
 const [firstRendering, setFirstRendering] = useState(false)
 
 useEffect(() => {
   setItems(JSON.parse(localStorage.getItem("product")))
   setTotalPrice(JSON.parse(localStorage.getItem("price")))
   console.log("ITEMS", items)
 },[])
 
  useEffect(() => {
    if(firstRendering === true) {
      localStorage.setItem("product", JSON.stringify(items))
      localStorage.setItem("price", JSON.stringify(totalPrice))
      console.log("SET", items)
    } else {
      setFirstRendering(true)
    }
    if(items === null)
    setItems([])
  },[items])


  const plusOne = (product) => {
    let updatedItems = items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
    
    setTotalPrice(totalPrice + product.price);
    
  };

  const minusOne = (product) => {
    let cartItem = items.find((item) => item.id === product.id);
    if (cartItem.quantity > 1) {
      let updatedItems = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setItems(updatedItems);
      setTotalPrice(totalPrice - product.price);
    } else if (cartItem) {
      setItems(items.filter((item) => item.id !== cartItem.id));
      setTotalPrice(totalPrice - product.price);
    }
  };

  const addToCart = (product) => {
    console.log(typeof items);
    console.log(items)
    let cartItem = items.find((item) => item.id === product.id);
    if (cartItem) {
      setItems(
        items.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      setTotalPrice(totalPrice + product.price);
    } else {
      setItems([
        ...items,
        {
          id: product.id,
          name: product.name,
          quantity: 1,
          price: product.price,
          image: product.imageName,
        },
      ]);
      setTotalPrice(totalPrice + product.price);
    }
    console.log(items);
  };

  const removeFromCart = (product) => {
    let cartItem = items.find((item) => item.id === product.id);
    if (cartItem) {
      setItems(items.filter((item) => item.id !== cartItem.id));
      setTotalPrice(totalPrice - product.price);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        items,
        totalPrice,
        plusOne,
        minusOne,
        setItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
