import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "../components/HamburgerMenu.module.css";
import logo from "../img/Rinflix-logo.png";

export default function HamburgerMenu({ isOpen, toggleMenu }) {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className={styles.container}>
      <NavLink to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </NavLink>
      <button className={styles.hamburgerMenu} onClick={toggleMenu}>
        <div className={isOpen ? styles.line1Change : styles.line1}></div>
        <div className={isOpen ? styles.line2Change : styles.line2}></div>
        <div className={isOpen ? styles.line3Change : styles.line3}></div>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.listContainer}>
            <NavLink to="/" className={styles.list}>
              Home
            </NavLink>
            <NavLink to="/NowTrending" className={styles.list}>
              Now Trending
            </NavLink>
            <NavLink to="/Romance" className={styles.list}>
              Romance
            </NavLink>
            <NavLink to="/Thriller" className={styles.list}>
              Thriller
            </NavLink>
            <NavLink to="/Family" className={styles.list}>
              Family
            </NavLink>
            <NavLink to="/Favourite" className={styles.list}>
              Favourite
            </NavLink>
            <NavLink to="/Search" className={styles.list}>
              Search
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
