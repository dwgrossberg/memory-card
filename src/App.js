import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import "./styles/App.scss";

const App = () => {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Header highScore={highScore} score={score} />
      <Gameboard
        highScore={highScore}
        setHighScore={setHighScore}
        score={score}
        setScore={setScore}
      />
      <Footer />
    </div>
  );
};

export default App;
