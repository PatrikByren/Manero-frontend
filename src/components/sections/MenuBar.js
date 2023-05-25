import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/profilecontext/UserContext";

const MenuBar = () => {
  const { IsSignedIn } = useUserContext()
  return (
    <section className="menubarsection">
      <div className="container">
        <div className="menu-icons">
          <NavLink to="/" className="menu-link">
            <i className="fa-light fa-house fa-lg"></i>
          </NavLink>
          <NavLink to="/search" className="menu-link">
            <i className="fa-light fa-magnifying-glass fa-lg"></i>
          </NavLink>
          <NavLink to="/cart" className="menu-link">
            <i className="fal fa-shopping-bag fa-lg"></i>
          </NavLink>
          <NavLink to="/wishlist" className="menu-link">
            <i className="fa-light fa-heart fa-lg"></i>
          </NavLink>
          <NavLink to={ IsSignedIn ? "/myprofile" : "/signin"} className="menu-link">
            <i className="fa-light fa-circle-user fa-lg"></i>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MenuBar;
