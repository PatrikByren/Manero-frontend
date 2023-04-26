import React from "react";
import Header from "../components/sections/Header";
import ProductCarousel from "../components/sections/ProductCarousel";
import MenuBar from "../components/sections/MenuBar";
import Showcase from "../components/sections/Showcase";
import DiscountShowcase from "../components/sections/DiscountShowcase";

const HomeView = () => {
  return (
    <div>
      <Header/>
      <Showcase/>
      <ProductCarousel  carouselClass="bestSellerCarousel" 
                        cardClass="card-1"
                        title="Best Sellers" 
                        />
      <DiscountShowcase/>
      <ProductCarousel  carouselClass="featuredCarousel"
                        cardClass="card-1"
                        title="Featured products"/>
      <MenuBar/>
    </div>
  );
};

export default HomeView;
