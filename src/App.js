import React, { useState, useEffect } from "react";
import circleIMG_1 from "./assets/circle1.png";
import circleIMG_2 from "./assets/circle2.png";
import "./styles/App.css";

const App = () => {
  const [roundScore, setRoundScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState("circle");
  const [circle, setCircle] = useState([
    {
      img: circleIMG_1,
      clicked: false,
    },
    {
      img: circleIMG_2,
      clicked: false,
    },
  ]);

  return (
    <div className="App">
      <img alt="circle1" src={circle.img}></img>
    </div>
  );
};

export default App;
