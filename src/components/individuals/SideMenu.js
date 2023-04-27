import React, { useState } from "react";

const SideMenu = ({ icon }) => {
  let isSidebar = icon === "fa-sharp fa-light fa-bars";
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const openMenu = () => {
    setIsOpen(!isOpen);
    console.log(isSidebar);
  };
  function goBack() {
    window.history.back();
  }
  return (
    <>
      <div className="iconcontainer">
        <i className={icon} onClick={isSidebar ? openMenu : goBack}></i>
      </div>
      <nav
        className={
          isSidebar ? `nav ${isOpen ? "nav-open" : "nav-closed"}` : "hide"
        }
      >
        <div className="contactus">
          <h1>Contact us</h1>
        </div>
        <div className="info-container">
          <div className="info-item">
            <i className="fa-regular fa-location-dot fa-lg"></i>
            <p>27 division St, New York</p>
          </div>
          <div className="info-item">
            <i className="fa-regular fa-envelope fa-lg"></i>
            <p>manerosale@manero.com</p>
          </div>
          <div className="info-item">
            <i className="fa-regular fa-phone-volume fa-lg"></i>
            <p>+17 5123 1027</p>
          </div>
        </div>
        <div className="trackorder">
          <p>Track your order</p>
          <div className="inputcontainer">
            <label className="baselabel">ORDER NUMBER</label>
            <div className="inputgroup">
              <input
                className="inputtrackorder"
                type="number"
                id={value}
                value={value}
                onChange={(event) => setValue(event.target.value)}
              ></input>
              <div className="arrowcontainer">
                <i className="fa-duotone fa-circle-arrow-right fa-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideMenu;
