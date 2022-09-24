import React, { useState, useEffect } from "react";
import hexIMG_1 from "../assets/hex1.png";
import hexIMG_2 from "../assets/hex2.png";
import hexIMG_3 from "../assets/hex3.png";
import hexIMG_4 from "../assets/hex4.png";

const Hexes = (props) => {
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
  return;
};

export default Hexes;
