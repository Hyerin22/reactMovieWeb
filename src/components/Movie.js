import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Movie.module.css";

// movie component: receive all these properties from parent component
export default function Movie({
  id,
  coverImg,
  title,
  genres,
  rating,
  movieYear,
}) {
  return (
    <div className={styles.movieCont}>
      <div className={styles.movieImg}>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} alt={title} />
        </Link>
      </div>
      <div className={styles.whenHover}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.rating}>⭐️ {rating}</p>
        <p className={styles.year}>{movieYear}</p>
        <div className={styles.genre}>
          {genres.map((g) => (
            <p key={g}>#{g}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
