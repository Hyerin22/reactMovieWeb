import React from "react";
import { useState, useEffect } from "react";
import { json, Link, NavLink } from "react-router-dom";

import styles from "./NowTrending.module.css";

import Nav from "../components/Nav";
import MovieInfo from "../components/MovieInfo";
import Footer from "../components/Footer";
// import MovieRank from "../components/MovieRank";

export default function NowTrending({ each }) {
  const [movies, setMovies] = useState([]);

  const getTrending = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?limit=10&minimum_rating=9&sort_by=year`
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
        <p className={styles.title}>Now Trending</p>
        <div className={styles.movieContent}>
          {movies.map((movie) => (
            <div style={{ position: "relative" }}>
              <p className={styles.rank}>{movies.indexOf(movies[1])}</p>
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
