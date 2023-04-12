import React from "react";
import style from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav className={style.nav}>
      <button
        className={style.button}
        onClick={() => {
          props.handleShuffle(props.cards);
        }}
      >
        Suffle
      </button>

      <p>Score: {props.score}</p>
    </nav>
  );
};

export default Nav;
