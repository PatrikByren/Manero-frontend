import React from "react";
import SideMenu from "../individuals/SideMenu";
import ShoppingCartIcon from "../individuals/ShoppingCartIcon";
import Middle from "../individuals/Middle";

const Header = ({icon, title, onclick}) => {
  console.log(title);
  return (
    <section className="headersection">
      <SideMenu icon={icon} onclick={onclick}/>
      <Middle title={title} />
      <ShoppingCartIcon />
    </section>
  );
};

export default Header;
