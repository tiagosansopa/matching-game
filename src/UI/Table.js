import React from "react";
import styles from "./Table.module.css";
import Card from "./Card";

const Table = (props) => {
  return (
    <div className={styles["table-container"]}>
      <div className={styles["table"]}>
        {props.cards.map((card, index) => {
          return (
            <Card
              key={index}
              index={index}
              card={card}
              handleTurn={props.handleTurn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
