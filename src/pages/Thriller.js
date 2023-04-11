import React, { useState, useEffect } from "react";

import styles from "./GenrePages.module.css";

import Nav from "../components/Nav";
import MovieInfo from "../components/MovieInfo";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import ContentLoader from "../components/ContentLoader";

export default function Thriller() {
  // for data
  const [movies, setMovies] = useState([]);

  // for loading
  const [loading, setLoading] = useState(true);

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalpages] = useState(1);

  const moviesPerPage = 4;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentPageMoveis = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // for importing data
  const getData = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?&genre=thriller&sort_by=rating`
      )
    ).json();
    setMovies(json.data.movies);
    setTotalpages(Math.ceil(json.data.movies.length / moviesPerPage));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      <Nav />
      <div>
        <p className={styles.title}># Thriller</p>
        {loading ? (
          <ContentLoader />
        ) : (
          <div>
            <div className={styles.movieContent}>
              {currentPageMoveis.map((movie) => (
                <div key={movie.id}>
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
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageClick={handlePageClick}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
