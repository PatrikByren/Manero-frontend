import React from "react";
import MenuBar from "../components/sections/MenuBar";
import Header from "../components/sections/Header";
import Categories from "../components/sections/Categories";
const SearchView = () => {
  return (
    <div id="search">
      <Header icon={"fa-sharp fa-light fa-bars"} onclick={onclick} title={"search"}/>
      <Categories/>
      <MenuBar />
    </div>
  );
};

export default SearchView;
