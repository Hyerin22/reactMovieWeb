import React, { useState, useEffect } from "react";

import styles from "./Favourite.module.css";
import Nav from "../components/Nav";
import MovieInfo from "../components/MovieInfo";
import Footer from "../components/Footer";

export default function Favourite() {
  const [favMovies, setFavMovies] = useState([]);

  // get favList
  useEffect(() => {
    const savedFavMovies = localStorage.getItem("favList");
    if (savedFavMovies) {
      setFavMovies(JSON.parse(savedFavMovies));
    }
    // console.log(savedFavMovies);
  }, []);

  return (
    <div>
      <Nav />
      <div>
        <p className={styles.title}>My List</p>
        <div className={styles.container}>
          {favMovies.length > 0 ? (
            favMovies.map((movie) => (
              <MovieInfo
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                rating={movie.rating}
                movieYear={movie.year}
                genres={movie.genres}
                summary={movie.summary}
                runtime={movie.runtime}
                length={movie.length}
              />
            ))
          ) : (
            <p className={styles.noMovie}>No movies yet in your list.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
