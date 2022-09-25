import React from "react";
import "../styles/Gameboard.scss";

const Card = (props) => {
  const updateScore = () => {
    console.log(props.score);
    props.setScore(props.score + 1);
  };

  return (
    <div className={`Card ${props.name}`} onClick={updateScore}>
      <img alt="" src={props.img}></img>
    </div>
  );
};

export default Card;
