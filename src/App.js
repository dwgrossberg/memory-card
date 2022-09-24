import React, { useState, useEffect } from "react";
import circleIMG_1 from "./assets/circle1.png";
import circleIMG_2 from "./assets/circle2.png";
import hexIMG_1 from "./assets/hex1.png";
import hexIMG_2 from "./assets/hex2.png";
import hexIMG_3 from "./assets/hex3.png";
import hexIMG_4 from "./assets/hex4.png";
import triangleIMG_1 from "./assets/triangle1.png";
import triangleIMG_2 from "./assets/triangle2.png";
import triangleIMG_3 from "./assets/triangle3.png";
import triangleIMG_4 from "./assets/triangle4.png";
import triangleIMG_5 from "./assets/triangle5.png";
import triangleIMG_6 from "./assets/triangle6.png";
import triangleIMG_7 from "./assets/triangle7.png";
import triangleIMG_8 from "./assets/triangle8.png";
import spiralIMG_1 from "./assets/spiral1.png";
import spiralIMG_2 from "./assets/spiral2.png";
import spiralIMG_3 from "./assets/spiral3.png";
import spiralIMG_4 from "./assets/spiral4.png";
import spiralIMG_5 from "./assets/spiral5.png";
import spiralIMG_6 from "./assets/spiral6.png";
import spiralIMG_7 from "./assets/spiral7.png";
import spiralIMG_8 from "./assets/spiral8.png";
import spiralIMG_9 from "./assets/spiral9.png";
import spiralIMG_10 from "./assets/spiral10.png";
import spiralIMG_11 from "./assets/spiral11.png";
import spiralIMG_12 from "./assets/spiral12.png";
import spiralIMG_13 from "./assets/spiral13.png";
import spiralIMG_14 from "./assets/spiral14.png";
import spiralIMG_15 from "./assets/spiral15.png";
import spiralIMG_16 from "./assets/spiral16.png";
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
  const [hex, setHex] = useState([
    {
      img: hexIMG_1,
      clicked: false,
    },
    {
      img: hexIMG_2,
      clicked: false,
    },
    {
      img: hexIMG_3,
      clicked: false,
    },
    {
      img: hexIMG_4,
      clicked: false,
    },
  ]);
  const [triangle, setTriangle] = useState([
    {
      img: triangleIMG_1,
      clicked: false,
    },
    {
      img: triangleIMG_2,
      clicked: false,
    },
    {
      img: triangleIMG_3,
      clicked: false,
    },
    {
      img: triangleIMG_4,
      clicked: false,
    },
    {
      img: triangleIMG_5,
      clicked: false,
    },
    {
      img: triangleIMG_6,
      clicked: false,
    },
    {
      img: triangleIMG_7,
      clicked: false,
    },
    {
      img: triangleIMG_8,
      clicked: false,
    },
  ]);
  const [spiral, setSpiral] = useState([
    {
      img: spiralIMG_1,
      clicked: false,
    },
    {
      img: spiralIMG_2,
      clicked: false,
    },
    {
      img: spiralIMG_3,
      clicked: false,
    },
    {
      img: spiralIMG_4,
      clicked: false,
    },
    {
      img: spiralIMG_5,
      clicked: false,
    },
    {
      img: spiralIMG_6,
      clicked: false,
    },
    {
      img: spiralIMG_7,
      clicked: false,
    },
    {
      img: spiralIMG_8,
      clicked: false,
    },
    {
      img: spiralIMG_9,
      clicked: false,
    },
    {
      img: spiralIMG_10,
      clicked: false,
    },
    {
      img: spiralIMG_11,
      clicked: false,
    },
    {
      img: spiralIMG_12,
      clicked: false,
    },
    {
      img: spiralIMG_13,
      clicked: false,
    },
    {
      img: spiralIMG_14,
      clicked: false,
    },
    {
      img: spiralIMG_15,
      clicked: false,
    },
    {
      img: spiralIMG_16,
      clicked: false,
    },
  ]);

  return <div className="App"></div>;
};

export default App;
