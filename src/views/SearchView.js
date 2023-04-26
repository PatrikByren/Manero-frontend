import React from "react";
import MenuBar from "../components/sections/MenuBar";
import Header from "../components/sections/Header";
import Categories from "../components/sections/Categories";
const SearchView = () => {
  return (
    <div id="search">
      <Header />
      <Categories/>
      <MenuBar />
    </div>
  );
};

export default SearchView;
