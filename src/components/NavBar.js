import "./NavBar.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className="container-fluid">
      <div className={color ? "header header-bg" : "header"}>
        <Link to={"/"}>
          <img
            src={require("../../src/assets/logo.jpeg")}
            alt="logo"
            className="logo p-2"
          />
        </Link>
        <ul
          onClick={handleClick}
          className={click ? "nav-menu active" : "nav-menu"}
        >
          <li className={`${pathname === "/" ? "nav-menu-active" : ""}`}>
            <Link to={"/"}>Home</Link>
          </li>
          <li className={`${pathname === "/Riders" ? "nav-menu-active" : ""}`}>
            <Link to={"/Riders"}>Riders</Link>
          </li>
          <li
            className={`${pathname === "/Location" ? "nav-menu-active" : ""}`}
          >
            <Link to={"/Location"}>Location</Link>
          </li>
          <li className={`${pathname === "/Photos" ? "nav-menu-active" : ""}`}>
            <Link to={"/Photos"}>Photos</Link>
          </li>
          <li className={`${pathname === "/Contest" ? "nav-menu-active" : ""}`}>
            <Link to={"/Contest"}>Contest</Link>
          </li>
        </ul>
        <div className="hamburger mx-3" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
