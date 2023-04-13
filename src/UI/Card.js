import React, { useDebugValue, useEffect, useState } from "react";
import classnames from "classnames";
import style from "./Card.module.css";

const Card = (props) => {
  const handleClick = (e) => {
    if (!props.isFlipped) props.handleTurn(props.index);
  };

  return (
    <button
      className={classnames(style.card, {
        [style.hover]: !props.isFlipped,
        [style.hide]: props.isFound,
      })}
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
