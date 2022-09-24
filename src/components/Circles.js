import React, { useState, useEffect } from "react";
import circleIMG_1 from "../assets/circle1.png";
import circleIMG_2 from "../assets/circle2.png";

const Circles = (props) => {
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
  return;
};

export default Circles;
