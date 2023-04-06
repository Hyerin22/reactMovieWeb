import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../img/Rinflix-logo.png";

export default function Footer() {
  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.footer}>
        <img src={logo} alt="footer logo" />
      </NavLink>
    </div>
  );
}
