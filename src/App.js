import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Card from "./Card/Card";
import { useEffect, useState } from "react";

function App() {
  const [guns, setGuns] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="App">
      {/* navbar */}
      <Navbar></Navbar>

      {/* gun sending  */}

      <section className="gun-container">
        {guns.map((gun) => (
          <Card key={gun.id} gun={gun}></Card>
        ))}
      </section>
    </div>
  );
}

export default App;
