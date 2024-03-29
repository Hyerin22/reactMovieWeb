import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./MovieInfo.module.css";

export default function MovieInfo({
  coverImg,
  title,
  id,
  movieYear,
  rating,
  genres,
  summary,
}) {
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
            </div>

            {/* movie year, rating */}
            <div className={styles.infoMid}>
              <div className={styles.flex}>
                <p>{movieYear}</p>
                <p>⭐️ {rating}</p>
              </div>
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
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};
