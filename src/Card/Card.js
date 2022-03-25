import React from "react";
import "./Card.css";
import { BsFillCartCheckFill } from "react-icons/bs";

const Card = ({ gun, addToCart }) => {
  const { img, action, bullet, name, price, capacity } = gun;
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="gun-info">
        <h1>{name}</h1>
        <p>Bullet-type: {bullet}</p>
        <p>Capacity: {capacity}</p>
        <p>Action: {action}</p>
      </div>
      <div className="add-to-cart">
        <button onClick={() => addToCart(gun)}>
          <BsFillCartCheckFill className="icon"></BsFillCartCheckFill>
        </button>
        <h1>Price: {price}</h1>
      </div>
    </div>
  );
};

export default Card;
