import React from "react";
import MenuBar from "../components/sections/MenuBar";
import Header from "../components/sections/Header";
import Categories from "../components/sections/Categories";
import SearchFilter  from "../components/SearchFilter";
//import { useProductContext } from "../context/Productcontext/ProductContext";
const SearchView = () => {
  return (
    <div id="search">
      <Header icon={"fa-sharp fa-light fa-bars"} onclick={onclick} title={"search"}/>
      <SearchFilter/>
      <Categories/>      
      <MenuBar />
     
    </div>
  );
};

export default SearchView;
