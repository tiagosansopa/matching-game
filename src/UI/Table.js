import React from "react";
import styles from "./Table.module.css";
import Card from "./Card";

const Table = (props) => {
  return (
    <div className={styles["table-container"]}>
      <div className={styles["table"]}>
        {props.cards.map((card) => {
          return (
            <Card
              path={card.src + card.id + card.ext}
              card={card}
              checkTurn={props.checkTurn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
