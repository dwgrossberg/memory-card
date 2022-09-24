import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import "./styles/App.css";

const App = () => {
  const [roundScore, setRoundScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <Gameboard />
      <Footer />
    </div>
  );
};

export default App;
