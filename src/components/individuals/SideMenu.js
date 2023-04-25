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
      <ul className={!isActive ? "menu-items" : "menu-items.open"}>
        <li href="#">location</li>
        <li href="#">number</li>
        <li href="#">email</li>
      </ul>
    </div>
  );
};

export default SideMenu;
