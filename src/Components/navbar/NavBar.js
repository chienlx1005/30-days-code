import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
function NavBar() {
  return (
    <>
      <div className="navBar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/productCart"}>Product Cart</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/toast"}>Toast Form</NavLink>
        <NavLink to={"/weather"}>Weather App</NavLink>
      </div>
    </>
  );
}

export default NavBar;
