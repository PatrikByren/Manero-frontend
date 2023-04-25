import React from "react";

const MenuBar = () => {
  return (
    <section className="menubarsection">
      <div className="container">
        <div className="line">
          <hr></hr>
        </div>
        <div className="menu-icons">
          <a><i class="fa-regular fa-house fa-lg"></i></a>
          <a><i class="fa-light fa-magnifying-glass fa-lg"></i></a>
          <a><i className="fal fa-shopping-bag fa-lg"></i></a>
          <a><i class="fa-light fa-heart fa-lg"></i></a>
          <a><i class="fa-light fa-circle-user fa-lg"></i></a>
        </div>
      </div>
    </section>
  );
};

export default MenuBar;
