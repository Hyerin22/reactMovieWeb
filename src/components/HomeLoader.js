import React from "react";
import styles from "./HomeLoader.module.css";

export default function HomeLoader() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.spinner}></div>
        <div className={styles.text}>Loading...</div>
      </div>
    </div>
  );
}
