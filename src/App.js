import "./App.css";
import Navbar from "./Navbar/Navbar";
import Card from "./Card/Card";
import { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";

import { AiOutlineCloseCircle } from "react-icons/ai";

// Modal style
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

//saving to root
Modal.setAppElement("#root");

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const gunPrice = cart.reduce((prev, curr) => prev + parseInt(curr.price), 0);

  return (
    <div className="App">
      {/* navbar */}
      <Navbar cart={cart} openModal={openModal}></Navbar>

      {/* gun sending  */}

      <section className="gun-container">
        {guns.map((gun) => (
          <Card key={gun.id} gun={gun} addToCart={addToCart}></Card>
        ))}
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="cart-corner">
          <div onClick={closeModal}>
            <AiOutlineCloseCircle className="closeicon"></AiOutlineCloseCircle>
          </div>

          <p>Total Price:{gunPrice} </p>
        </div>

        <div className="cart-container">
          {cart.map((gun) => (
            <div className="cartinfo" key={gun.id}>
              <img src={gun.img} alt="" />
              <div className="namePrice">
                <h2>{gun.name}</h2>
                <p>Price: {gun.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
