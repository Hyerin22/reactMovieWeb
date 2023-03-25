import React from "react";
import styles from "./ContentLoader.module.css";

export default function ContentLoader({ marginT }) {
  return (
    <div className={styles.container}>
      <div style={{ marginTop: marginT }}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
}
