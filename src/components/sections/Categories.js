import React from "react";
import { useState } from "react";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <section className="categories">
      <div className="consumercategories">
        <button
          className={
            selectedCategory === "men" ? "consumerbtn-selected" : "consumerbtn"
          }
          value="men"
          onClick={(e) => setSelectedCategory(e.target.value)}
        >
          Men
        </button>
        <button
          className={
            selectedCategory === "women"
              ? "consumerbtn-selected"
              : "consumerbtn"
          }
          value="women"
          onClick={(e) => setSelectedCategory(e.target.value)}
        >
          Women
        </button>
        <button
          className={
            selectedCategory === "kids" ? "consumerbtn-selected" : "consumerbtn"
          }
          value="kids"
          onClick={(e) => setSelectedCategory(e.target.value)}
        >
          Kids
        </button>
        <button
          className={
            selectedCategory === "accessories"
              ? "consumerbtn-selected"
              : "consumerbtn"
          }
          value="accessories"
          onClick={(e) => setSelectedCategory(e.target.value)}
        >
          Accesories
        </button>
      </div>
      <div className="productcategories">
        <div className="dresses">
          <p>Dresses</p>
        </div>
        <div className="pants">
          <p>Pants</p>
        </div>
        <div className="accessories">
          <p>Accesories</p>
        </div>
        <div className="shoes">
          <p>Shoes</p>
        </div>
        <div className="t-shirts">
          <p>T-Shirts</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
