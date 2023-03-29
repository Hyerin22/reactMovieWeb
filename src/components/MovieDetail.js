import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./MovieDetail.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function MovieDetail({
  title,
  movieYear,
  rating,
  runtime,
  genres,
  summary,
}) {
  const [toggle, setToggle] = useState(false);
  const onFav = () => {
    setToggle((current) => !current);
  };

  return (
    <div className={styles.container}>
      <div className={styles.firstLine}>
        <h1 className={styles.title}>{title}</h1>
        <button onClick={onFav} className={styles.heart}>
          {!toggle ? (
            <FontAwesomeIcon
              className={styles.heartIcon}
              icon={faHeart}
              color="#EC6640"
              size="3x"
            />
          ) : (
            <FontAwesomeIcon
              className={styles.heartIcon}
              icon={faHeart}
              color="#EC6640"
              style={{ opacity: 1 }}
              size="3x"
            />
          )}
        </button>
      </div>

      <div className={styles.secondLine}>
        <h3>{movieYear}</h3>
        <h3>{runtime === 0 ? `N/A` : `${runtime} m`}</h3>
        <h3>⭐️ {rating}</h3>
      </div>

      <div className={styles.genre}>
        {genres && genres.map((g) => <h3 key={g}># {g}</h3>)}
      </div>

      <div className={styles.summary}>
        <p>{summary}</p>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};
