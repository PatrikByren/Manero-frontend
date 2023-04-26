import React from "react";

const Categories = () => {
  return (
    <section className="categories">
      <div className="consumercategories">
        <button className="consumerbtn">Men</button>
        <button className="consumerbtn">Women</button>
        <button className="consumerbtn">Kids</button>
        <button className="consumerbtn">Accesories</button>
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
