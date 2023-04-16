import React, { useState } from "react";
import Nav from "../components/Nav";

import styles from "./Search.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <div className={styles.search}>
          <div className={styles.input}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              color="#66FCF1"
              size="xl"
            />
            <input type="text" placeholder="Search here" />
          </div>
          <div className={styles.found}></div>
        </div>
        <div className={styles.content}></div>
      </div>
    </div>
  );
}
