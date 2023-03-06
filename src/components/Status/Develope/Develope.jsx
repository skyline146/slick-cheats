import React from "react";
import styles from "../Status.module.css";

function Develope() {
  return (
    <div className={styles.develope}>
      <div className={styles.develope__circle} />
      <p className={styles.develope__text}>Developing</p>
    </div>
  );
}

export default Develope;
