import React, { useState, useEffect } from "react";

import styles from "./GenrePages.module.css";

import Nav from "../components/Nav";
import MovieInfo from "../components/MovieInfo";
import Footer from "../components/Footer";

export default function Thriller() {
  const [movies, setMovies] = useState([]);

  const getTrending = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?&genre=thriller&sort_by=rating`
      )
    ).json();
    setMovies(json.data.movies);
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div>
      <Nav />
      <div>
        <p className={styles.title}>Thriller</p>
        <div className={styles.movieContent}>
          {movies.map((movie, index) => (
            <div>
              {/* Movies */}
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
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
