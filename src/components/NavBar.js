import "./NavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
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
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Riders"}>Riders</Link>
          </li>
          <li>
            <Link to={"/Location"}>Location</Link>
          </li>
          <li>
            <Link to={"/Photos"}>Photos</Link>
          </li>
          <li>
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
