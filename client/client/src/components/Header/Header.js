// Header.js

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <div className="brand">
            <FaCartArrowDown/>
            <Link to="/" className="navbar-link">
              Ecommerce App
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                Category
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="nav-link">
                Cart (0)
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
