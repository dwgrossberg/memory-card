import React from "react";
import "../styles/Header.scss";

const Header = (props) => {
  return (
    <div className="Header">
      Memory Card Game
      <span className="instructions">
        Earn points by clicking on the images...
      </span>
      <span className="instructions">
        don't repeat any or you'll be sent back to the beginning!
      </span>
      <div className="scoreboard">
        <div id={"highScore"}>High Score: {props.highScore}</div>
        <div id={"score"}>Score: {props.score}</div>
      </div>
    </div>
  );
};

export default Header;
