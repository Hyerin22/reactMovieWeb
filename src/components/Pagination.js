import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Pagination.module.css";

export default function Pagination({
  currentPage,
  totalPages,
  handlePageClick,
  handlePrevPage,
  handleNextPage,
}) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`${styles.eachNumber} ${
            currentPage === i ? styles.selected : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          <button
            className={currentPage === i ? styles.selectedButton : ""}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };
  return (
    <div className={styles.container}>
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={styles.arrowButton}
      >
        <FontAwesomeIcon icon={faChevronLeft} color="#66FCF1" size="2x" />
      </button>
      <ul className={styles.numbers}>{renderPageNumbers()}</ul>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={styles.arrowButton}
      >
        <FontAwesomeIcon icon={faChevronRight} color="#66FCF1" size="2x" />
      </button>
    </div>
  );
}
