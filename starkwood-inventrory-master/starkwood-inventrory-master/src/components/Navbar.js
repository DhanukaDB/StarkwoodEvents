import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon
import './Navbar.css';
import logo from "../assets/logo.png"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <ul className="nav-list">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#products">Products</a></li>
        <li className="nav-item"><a href="#packages">Packages</a></li>
        <li className="nav-item"><a href="#video">Video</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
      <button className="cart-btn">
        <FaShoppingCart className="cart-icon" />
        $2500
      </button>
    </nav>
  );
};

export default Navbar;
