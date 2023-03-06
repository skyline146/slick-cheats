import React from "react";
import styles from "../Status.module.css";

function Update() {
  return (
    <div className={styles.update}>
      <div className={styles.update__circle} />
      <p className={styles.update__text}>On update</p>
    </div>
  );
}

export default Update;
