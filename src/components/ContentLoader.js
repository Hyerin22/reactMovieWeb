import React from "react";
import styles from "./ContentLoader.module.css";
import PropTypes from "prop-types";

export default function ContentLoader({ marginT = 140, marginB = 200 }) {
  return (
    <div className={styles.container}>
      <div style={{ marginTop: marginT, marginBottom: marginB }}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
}

ContentLoader.propTypes = {
  marginT: PropTypes.number,
  marginB: PropTypes.number,
};
