import React from 'react'
import Header from "../components/sections/Header";
import Products  from "../components/Products";


const ProductView = () => {
  return (
    <div>
      <Header icon={"fa-sharp fa-light fa-bars"} title={"MANERO"} />
      <Products/>
    </div>
  );
};

export default ProductView;
