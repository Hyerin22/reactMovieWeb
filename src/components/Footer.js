import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const logoImage = process.env.PUBLIC_URL + "Rinflix-logo.png";

export default function Footer() {
  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.footer}>
        <img src={logoImage} alt="footer logo" />
      </NavLink>
    </div>
  );
}
