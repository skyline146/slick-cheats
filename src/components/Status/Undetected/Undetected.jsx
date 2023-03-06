import React from "react";
import styles from "../Status.module.css";

function Undetected() {
  return (
    <div className={styles.undetected}>
      <div className={styles.undetected__circle} />
      <p className={styles.undetected__text}>Undetected</p>
    </div>
  );
}

export default Undetected;
