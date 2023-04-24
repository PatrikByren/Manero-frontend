import React from "react";
import SideMenu from "../individuals/SideMenu";
import ShoppingCartIcon from "../individuals/ShoppingCartIcon";
import Middle from "../individuals/Middle";

const Header = () => {
  return (
    <section className="headersection">
      <SideMenu icon={"fa-sharp fa-light fa-bars"}/>
      <Middle title={"MANERO"} />
      <ShoppingCartIcon />
    </section>
  );
};

export default Header;
