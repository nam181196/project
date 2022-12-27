import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logopet.jpeg";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <ul className="menu">
        <Link className="menu-item" to="/">
          Home
        </Link>
        <Link className="menu-item pre-last" to="/product">
          Product
        </Link>
        <Link className="menu-item" to="/cart">
          <FontAwesomeIcon icon={faCartPlus} />
        </Link>
        <Link className="menu-item" to="/signin">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;