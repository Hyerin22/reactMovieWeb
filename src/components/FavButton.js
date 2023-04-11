import React, { useState, useEffect } from "react";

import styles from "./FavButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function FavButton({
  coverImg,
  title,
  id,
  movieYear,
  rating,
  genres,
  summary,
}) {
  const [toggle, setToggle] = useState(false);
  const [favMovie, setFavMovie] = useState([]);

  // get favList
  useEffect(() => {
    const savedFavMovies = localStorage.getItem("favList");
    if (savedFavMovies) {
      setFavMovie(JSON.parse(savedFavMovies));
    }
  }, []);

  // update favList when it changes
  useEffect(() => {
    // save the lists to the array
    localStorage.setItem("favList", JSON.stringify(favMovie));
  }, [favMovie]);

  // check if the movie is in the favList or not
  useEffect(() => {
    const isFav = favMovie.some((movie) => movie.id === id);
    setToggle(isFav);
  }, [favMovie, id]);

  const onFavToggle = () => {
    if (toggle) {
      // remove from list
      setFavMovie((prevFavList) =>
        prevFavList.filter((movie) => movie.id !== id)
      );
    } else {
      // add to list
      setFavMovie((prevFavList) => [
        ...prevFavList,
        { coverImg, title, id, movieYear, rating, genres, summary },
      ]);
    }
    setToggle((current) => !current);
  };

  return (
    <div>
      <button onClick={onFavToggle} className={styles.heart}>
        <FontAwesomeIcon
          className={styles.heartIcon}
          icon={faHeart}
          size="3x"
          color="#EC6640"
          style={{ opacity: toggle ? 1 : 0.3 }}
        />
      </button>
    </div>
  );
}
