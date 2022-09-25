import React from "react";
import "../styles/Gameboard.scss";

const Card = (props) => {
  return (
    <div className={"Card"}>
      <img alt="" src={props.img}></img>
    </div>
  );
};

export default Card;
