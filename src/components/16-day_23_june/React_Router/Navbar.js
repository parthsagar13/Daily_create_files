import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <div>
      <nav className='Parth'>
        <NavLink style={navLinkStyle} to="/">
          Home
        </NavLink>
        <NavLink style={navLinkStyle} to="about">
          About
        </NavLink>
        <NavLink style={navLinkStyle} to="ordersummary">
          Order Summary
        </NavLink>
        <NavLink style={navLinkStyle} to="product">
          Product
        </NavLink>
        <NavLink style={navLinkStyle} to="user">
         Users
        </NavLink>
      </nav>
    </div>
  );
}
