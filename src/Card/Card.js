import React from "react";
import "./Card.css";

const Card = ({ gun }) => {
  console.log(gun);
  const { img, action, bullet, name, price, capacity } = gun;
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <h1>{name}</h1>
      <p>Bullet-type: {bullet}</p>
      <p>Capacity: {capacity}</p>
      <p>Action: {action}</p>
      <div className="add-to-cart">
        <button>Add to Cart</button>
        <h1>Price: {price}</h1>
      </div>
    </div>
  );
};

export default Card;
