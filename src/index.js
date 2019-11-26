import React from "react";
import styles from "./index.css";

export default class Table extends React.Component {
  render() {
    return (
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.cell}>A0</div>
          <div className={styles.cell}>B0</div>
        </div>
      </div>
    );
  }
}
