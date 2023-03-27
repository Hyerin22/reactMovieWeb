import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./MovieInfo.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function MovieInfo({
  coverImg,
  title,
  id,
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
    <div>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          {/* Movie Image(Box Leftside) */}
          <Link to={`/movie/${id}`}>
            <div className={styles.movieImg}>
              <img src={coverImg} alt={title} />
            </div>
          </Link>

          {/* Movie Info(Box Rightside) */}
          <div className={styles.movieInfo}>
            {/* movie title and heart */}
            <div className={styles.infoTop}>
              <h3 className={styles.title}>{title}</h3>
              <div>
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
            </div>

            {/* movie year, rating, runtime */}
            <div className={styles.infoMid}>
              <div className={styles.flex}>
                <p>{movieYear}</p>
                <p>⭐️ {rating}</p>
              </div>
              <p>{runtime === 0 ? `N/A` : `${runtime} m`}</p>
            </div>

            {/* summary */}
            <div className={styles.infoContent}>
              <p>
                {summary.length > 90 ? `${summary.slice(0, 100)}` : summary}
                <Link to={`/movie/${id}`} className={styles.detailLink}>
                  {summary.length === 0 ? "" : "...more"}
                </Link>
              </p>
            </div>

            {/* genres */}
            <div className={styles.genre}>
              {genres.map((g) => (
                <p key={g}># {g}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  movieYear: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};
