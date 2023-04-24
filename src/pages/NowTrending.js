import React from "react";
import { useState, useEffect } from "react";

import styles from "./GenrePages.module.css";

import Nav from "../components/Nav";
import MovieInfo from "../components/MovieInfo";
import Footer from "../components/Footer";
import ContentLoader from "../components/ContentLoader";
import HamburgerMenu from "../components/HamburgerMenu";

export default function NowTrending() {
  // for data
  const [movies, setMovies] = useState([]);
  // for loading
  const [loading, setLoading] = useState(true);
  // for hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // for importing data
  const getTrending = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?limit=10&minimum_rating=9&sort_by=rating`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div>
      <Nav />
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div>
        <p className={styles.title}>Now Trending</p>
        {loading ? (
          <ContentLoader marginB={100} />
        ) : (
          <div className={styles.movieContent}>
            {movies.map((movie, index) => (
              <div style={{ position: "relative" }} key={movie.id}>
                {/* Rank Number */}
                <p className={styles.rank}>{index + 1}</p>

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
                  length={movie.length}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.footerCont}>
        <Footer />
      </div>
    </div>
  );
}
