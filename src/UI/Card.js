import React, { useDebugValue, useEffect, useState } from "react";
import style from "./Card.module.css";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [letter, setLetter] = useState("");
  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleClick = (e) => {
    flip();
    props.checkTurn(letter, flip);
  };

  useEffect(() => {
    setLetter(props.card.letter);
  }, []);

  return (
    <button
      className={isFlipped ? style.card : style.card + " " + style.hover}
      onClick={handleClick}
    >
      <div className={style.flipper}>
        <div className={style["back"]}>
          <div className={style["background"]}></div>
        </div>
        <div className={style["front"]}>
          {/*<img src={props.path}></img>*/}
          <h1>{props.card.letter}</h1>
        </div>
      </div>
    </button>
  );
};
export default Card;
