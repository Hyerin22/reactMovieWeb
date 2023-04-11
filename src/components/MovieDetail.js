import React from "react";
import PropTypes from "prop-types";

import styles from "./MovieDetail.module.css";
import FavButton from "./FavButton";

export default function MovieDetail({
  title,
  movieYear,
  rating,
  runtime,
  genres,
  summary,
  coverImg,
  id,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.firstLine}>
        <h1 className={styles.title}>{title}</h1>
        <FavButton
          title={title}
          coverImg={coverImg}
          id={id}
          movieYear={movieYear}
          rating={rating}
          runtime={runtime}
          genres={genres}
          summary={summary}
        />
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
  id: PropTypes.number.isRequired,
  converImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};
