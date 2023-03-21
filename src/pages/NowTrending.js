import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./NowTrending.module.css";

import Nav from "../components/Nav";
import MovieInfo from "../components/MovieInfo";
import Footer from "../components/Footer";

export default function NowTrending() {
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
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
