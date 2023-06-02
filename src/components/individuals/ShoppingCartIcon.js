import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/Shoppingcartcontext/CartContext";
const ShoppingCartIcon = ({ righticon }) => {
  const { totalQuantity } = useCartContext();
  let isBag = righticon === "fal fa-shopping-bag";
  
  return (
    <div className="shoppingicon">
      {totalQuantity > 0 ? (
        <NavLink to="/Cart" className="cartlink">
          {isBag? totalQuantity : ""}
          <i className={righticon}></i>
        </NavLink>
      ) : (
        <NavLink to="/Cart" className="cartlink">
          <i className={righticon}></i>
        </NavLink>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
