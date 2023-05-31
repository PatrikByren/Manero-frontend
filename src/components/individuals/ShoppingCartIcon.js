import React from "react";
import {NavLink} from "react-router-dom";
const ShoppingCartIcon = ({righticon}) => {
  return (
    <div className="shoppingicon">
      <NavLink to="/Cart" className="cartlink"><i className={righticon}></i></NavLink>
    </div>
  );
};

export default ShoppingCartIcon;
