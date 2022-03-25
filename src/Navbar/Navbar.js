import React from "react";
import "./Navbar.css";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = ({ cart, openModal }) => {
  return (
    <nav className="navbar">
      <h1>Gun Shop</h1>
      <div className="cart-counter" onClick={openModal}>
        <span>{cart.length}</span>
        <BsFillCartFill className="icon" color="#fff"></BsFillCartFill>
      </div>
      {/* <div className="cart-counter" onClick={toggleModal}>
        <BsFillCartFill className="icon" color="#fff" />
      </div> */}
    </nav>
  );
};

export default Navbar;
