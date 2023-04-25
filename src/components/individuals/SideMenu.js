import React, { useState } from "react";


const SideMenu = ({ icon }) => {
  const [isActive, setIsActive] = new useState(false);

  const toggle = (e) => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  return (
    <div><i className={icon}></i></div>
  );
};

export default SideMenu;
