import "./App.css";
import Navbar from "./Navbar/Navbar";
import Card from "./Card/Card";
import { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";

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
Modal.setAppElement("#yourAppElement");

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(newCart);
  };

  return (
    <div className="App">
      {/* navbar */}
      <Navbar></Navbar>

      {/* gun sending  */}

      <section className="gun-container">
        {guns.map((gun) => (
          <Card key={gun.id} gun={gun} addToCart={addToCart}></Card>
        ))}
      </section>
    </div>
  );
}

export default App;
