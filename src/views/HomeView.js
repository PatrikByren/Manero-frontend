import React, { useEffect } from "react";
import Header from "../components/sections/Header";
import ProductCarousel from "../components/sections/ProductCarousel";
import MenuBar from "../components/sections/MenuBar";
import Showcase from "../components/sections/Showcase";
import DiscountShowcase from "../components/sections/DiscountShowcase";
import { useProductContext } from "../context/Productcontext/ProductContext";

const HomeView = () => {
  const{products, getProducts} = useProductContext();
  useEffect(() => {
    getProducts();
  },[])
  
  return (
    <div>
      <Header icon={"fa-sharp fa-light fa-bars"} title={"MANERO"} righticon={"fal fa-shopping-bag"} />
      <Showcase/>
      <ProductCarousel  carouselClass="bestSellerCarousel" 
                        cardClass="card-1"
                        title="Best Sellers" 
                        products={products}
                        />
      <DiscountShowcase/>
      <ProductCarousel  carouselClass="featuredCarousel"
                        cardClass="card-2"
                        title="Featured products"
                        products={products}
                        />
                        
      <MenuBar/>
    </div>
  );
};

export default HomeView;
