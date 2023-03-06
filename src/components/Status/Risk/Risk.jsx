import React from "react";
import styles from "../Status.module.css";

function Risk() {
  return (
    <div className={styles.risk}>
      <div className={styles.risk__circle} />
      <p className={styles.risk__text}>Use at own risk</p>
    </div>
  );
}

export default Risk;
