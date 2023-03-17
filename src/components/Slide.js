import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Movie from "./Movie";
import styles from "./Slide.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Slide({ movieContents, apiLink }) {
  const [moveNext, setMoveNext] = useState(0);
  const [movies, setMovies] = useState([]);

  const onClickL = () => {
    if (moveNext >= 0) {
      return;
    }
    setMoveNext((current) => current + 240);
  };

  const onClickR = () => {
    if (moveNext <= -2450) {
      return;
    }
    setMoveNext((current) => current - 240);
  };

  const getMovies = async () => {
    const json = await (await fetch(apiLink)).json();
    setMovies(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <button className={styles.iconL} onClick={onClickL}>
        <FontAwesomeIcon icon={faChevronLeft} color="#C5C6C8" size="3x" />
      </button>
      <div className={styles.slideCont}>
        <div
          className={styles.slide}
          style={{
            transform: `translateX(${moveNext}px)`,
          }}
        >
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              movieYear={movie.year}
              genres={movie.genres}
            />
          ))}
        </div>
      </div>
      <button className={styles.iconR} onClick={onClickR}>
        <FontAwesomeIcon icon={faChevronRight} color="#C5C6C8" size="3x" />
      </button>
    </div>
  );
}

Movie.propTypes = {
  movieContents: PropTypes.string.isRequired,
};
