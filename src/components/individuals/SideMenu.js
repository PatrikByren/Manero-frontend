import React, { useState } from "react";

const SideMenu = ({ icon }) => {
  const [isActive, setIsActive] = new useState(false);

  const toggle = (e) => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  return (
    <div className="menu" onClick={toggle}>
      <div className="menuicon">
        <i className={icon}></i>
      </div>
      <div className={isActive ? "triggermenu" : null}>
        <h1>contact us</h1>
        <ul className="menu-items">
          <li href="#">location</li>
          <li href="#">number</li>
          <li href="#">social security number</li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
