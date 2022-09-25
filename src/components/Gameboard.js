import React, { useState, useEffect } from "react";
import Card from "./Card";
import circleIMG_1 from "../assets/circle1.png";
import circleIMG_2 from "../assets/circle2.png";
import hexIMG_1 from "../assets/hex1.png";
import hexIMG_2 from "../assets/hex2.png";
import hexIMG_3 from "../assets/hex3.png";
import hexIMG_4 from "../assets/hex4.png";
import triangleIMG_1 from "../assets/triangle1.png";
import triangleIMG_2 from "../assets/triangle2.png";
import triangleIMG_3 from "../assets/triangle3.png";
import triangleIMG_4 from "../assets/triangle4.png";
import triangleIMG_5 from "../assets/triangle5.png";
import triangleIMG_6 from "../assets/triangle6.png";
import triangleIMG_7 from "../assets/triangle7.png";
import triangleIMG_8 from "../assets/triangle8.png";
import spiralIMG_1 from "../assets/spiral1.png";
import spiralIMG_2 from "../assets/spiral2.png";
import spiralIMG_3 from "../assets/spiral3.png";
import spiralIMG_4 from "../assets/spiral4.png";
import spiralIMG_5 from "../assets/spiral5.png";
import spiralIMG_6 from "../assets/spiral6.png";
import spiralIMG_7 from "../assets/spiral7.png";
import spiralIMG_8 from "../assets/spiral8.png";
import spiralIMG_9 from "../assets/spiral9.png";
import spiralIMG_10 from "../assets/spiral10.png";
import spiralIMG_11 from "../assets/spiral11.png";
import spiralIMG_12 from "../assets/spiral12.png";
import spiralIMG_13 from "../assets/spiral13.png";
import spiralIMG_14 from "../assets/spiral14.png";
import spiralIMG_15 from "../assets/spiral15.png";
import spiralIMG_16 from "../assets/spiral16.png";
import "../styles/Gameboard.scss";

const Gameboard = (props) => {
  const [level, setLevel] = useState("circle");
  const [circle, setCircle] = useState([
    {
      img: circleIMG_1,
      name: "circle1",
      clicked: false,
    },
    {
      img: circleIMG_2,
      name: "circle2",
      clicked: false,
    },
  ]);
  const [hex, setHex] = useState([
    {
      img: hexIMG_1,
      name: "hex1",
      clicked: false,
    },
    {
      img: hexIMG_2,
      name: "hex2",
      clicked: false,
    },
    {
      img: hexIMG_3,
      name: "hex3",
      clicked: false,
    },
    {
      img: hexIMG_4,
      name: "hex4",
      clicked: false,
    },
  ]);
  const [triangle, setTriangle] = useState([
    {
      img: triangleIMG_1,
      name: "triangle1",
      clicked: false,
    },
    {
      img: triangleIMG_2,
      name: "triangle2",
      clicked: false,
    },
    {
      img: triangleIMG_3,
      name: "triangle3",
      clicked: false,
    },
    {
      img: triangleIMG_4,
      name: "triangle4",
      clicked: false,
    },
    {
      img: triangleIMG_5,
      name: "triangle5",
      clicked: false,
    },
    {
      img: triangleIMG_6,
      name: "triangle6",
      clicked: false,
    },
    {
      img: triangleIMG_7,
      name: "triangle7",
      clicked: false,
    },
    {
      img: triangleIMG_8,
      name: "triangle8",
      clicked: false,
    },
  ]);
  const [spiral, setSpiral] = useState([
    {
      img: spiralIMG_1,
      name: "spiral1",
      clicked: false,
    },
    {
      img: spiralIMG_2,
      name: "spiral2",
      clicked: false,
    },
    {
      img: spiralIMG_3,
      name: "spiral3",
      clicked: false,
    },
    {
      img: spiralIMG_4,
      name: "spiral4",
      clicked: false,
    },
    {
      img: spiralIMG_5,
      name: "spiral5",
      clicked: false,
    },
    {
      img: spiralIMG_6,
      name: "spiral6",
      clicked: false,
    },
    {
      img: spiralIMG_7,
      name: "spiral7",
      clicked: false,
    },
    {
      img: spiralIMG_8,
      name: "spiral8",
      clicked: false,
    },
    {
      img: spiralIMG_9,
      name: "spiral9",
      clicked: false,
    },
    {
      img: spiralIMG_10,
      name: "spiral10",
      clicked: false,
    },
    {
      img: spiralIMG_11,
      name: "spiral11",
      clicked: false,
    },
    {
      img: spiralIMG_12,
      name: "spiral12",
      clicked: false,
    },
    {
      img: spiralIMG_13,
      name: "spiral13",
      clicked: false,
    },
    {
      img: spiralIMG_14,
      name: "spiral14",
      clicked: false,
    },
    {
      img: spiralIMG_15,
      name: "spiral15",
      clicked: false,
    },
    {
      img: spiralIMG_16,
      name: "spiral16",
      clicked: false,
    },
  ]);

  const { score, setScore, highScore, setHighScore } = props;

  const resetBoard = () => {
    setLevel("circle");
    setScore(0);
    [circle, hex, triangle, spiral].forEach((array) => {
      array.forEach((item) => {
        item.clicked = false;
      });
    });
  };

  const updateScore = (name) => {
    [circle, hex, triangle, spiral].forEach((array) => {
      array.forEach((item) => {
        if (name === item.name) {
          console.log(item);
          if (item.clicked === false) {
            item.clicked = true;
            const newScore = score + 1;
            setScore(newScore);
            updateLevel(array);
            if (score >= highScore) {
              setHighScore(newScore);
            }
          } else if (item.clicked === true) {
            resetBoard();
          }
        }
      });
    });
  };

  const updateLevel = (array) => {
    if (array.every((item) => item.clicked === true)) {
      switch (array[0].name.replace(/[0-9]/g, "")) {
        case "circle":
          setLevel("hex");
          break;
        case "hex":
          setLevel("triangle");
          break;
        case "triangle":
          setLevel("spiral");
          break;
        default:
          console.log(array[0].name.replace(/[0-9]/g, ""));
      }
    }
  };

  const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  useEffect(() => {
    [circle, hex, triangle, spiral].forEach((array) => {
      shuffle(array);
    });
  });

  return (
    <div className="Gameboard">
      {level === "circle" && (
        <div className="Circles">
          {circle.map((item) => {
            return (
              <Card
                key={item.name}
                img={item.img}
                item={item.name}
                name={item.name.replace(/[0-9]/g, "")}
                score={score}
                setScore={setScore}
                highScore={highScore}
                setHighScore={setHighScore}
                updateScore={updateScore}
              />
            );
          })}
        </div>
      )}
      {level === "hex" && (
        <div className="Hexes">
          {hex.map((item) => {
            return (
              <Card
                key={item.name}
                img={item.img}
                item={item.name}
                name={item.name.replace(/[0-9]/g, "")}
                score={score}
                setScore={setScore}
                highScore={highScore}
                setHighScore={setHighScore}
                updateScore={updateScore}
              />
            );
          })}
        </div>
      )}
      {level === "triangle" && (
        <div className="Triangles">
          {triangle.map((item) => {
            return (
              <Card
                key={item.name}
                img={item.img}
                item={item.name}
                name={item.name.replace(/[0-9]/g, "")}
                score={score}
                setScore={setScore}
                highScore={highScore}
                setHighScore={setHighScore}
                updateScore={updateScore}
              />
            );
          })}
        </div>
      )}
      {level === "spiral" && (
        <div className="Spirals">
          {spiral.map((item) => {
            return (
              <Card
                key={item.name}
                img={item.img}
                item={item.name}
                name={item.name.replace(/[0-9]/g, "")}
                score={score}
                setScore={setScore}
                highScore={highScore}
                setHighScore={setHighScore}
                updateScore={updateScore}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Gameboard;
