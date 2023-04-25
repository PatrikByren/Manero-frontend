import React from "react";
import Header from "../components/sections/Header";
import ProductCarousel from "../components/sections/ProductCarousel";

const HomeView = () => {
  return (
    <div>
      <Header/>
      <ProductCarousel height={400} width={500} nameOfClass={}/>
    </div>
  );
};

export default HomeView;
