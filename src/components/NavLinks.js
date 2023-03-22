import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";

export default function NavLinks() {
  return (
    <ul className={styles.linkCont}>
      <li>
        <NavLink to="/NowTrending">Now Trending</NavLink>
      </li>
      <li>
        <NavLink to="/Romance">Romance</NavLink>
      </li>
      <li>
        <NavLink to="/">Thriller</NavLink>
      </li>
      <li>
        <NavLink to="/">Family</NavLink>
      </li>
    </ul>
  );
}
