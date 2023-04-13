import React from "react";
import styles from "./Table.module.css";

const Table = (props) => {
  return (
    <div className={styles["table-container"]}>
      <div className={styles["table"]}>{props.children}</div>
    </div>
  );
};

export default Table;
