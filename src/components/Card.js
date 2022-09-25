import React from "react";
import "../styles/Gameboard.scss";

const Card = (props) => {
  const { updateScore } = props;
  const handleClick = (e) => {
    updateScore(e.target.id);
  };

  return (
    <div className={`Card ${props.name}`} onClick={handleClick}>
      <img id={props.item} alt="" src={props.img}></img>
    </div>
  );
};

export default Card;
