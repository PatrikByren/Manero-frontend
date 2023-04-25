import React from "react";
import Header from "../components/sections/Header";
import ProductCarousel from "../components/sections/ProductCarousel";
import MenuBar from "../components/sections/MenuBar";

const HomeView = () => {
  return (
    <div>
      <Header/>
      <ProductCarousel height={400} width={500} nameOfClass={""}/>
      <MenuBar/>
    </div>
  );
};

export default HomeView;
