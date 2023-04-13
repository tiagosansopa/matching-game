import React, { useDebugValue, useEffect, useState } from "react";
import style from "./Card.module.css";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleClick = (e) => {
    flip();
    props.handleTurn(props.index);
  };

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
          <img src={props.card.src}></img>
        </div>
      </div>
    </button>
  );
};
export default Card;
