import React from "react";
import Header from "../components/sections/Header";
import ProductCarousel from "../components/sections/ProductCarousel";

const HomeView = () => {
  return (
    <div>
      <Header/>
      <ProductCarousel  carouselClass="bestSellerCarousel" 
                        cardClass="card-1"
                        title="BestSellers" 
                        />

      <ProductCarousel  carouselClass="featuredCarousel"
                        cardClass="card-1"
                        title="Featured products"/>
    </div>
  );
};

export default HomeView;
