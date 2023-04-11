import React, { useState, useEffect } from "react";

import styles from "./Favourite.module.css";
import Nav from "../components/Nav";
import MovieInfo from "../components/MovieInfo";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

export default function Favourite() {
  // for data
  const [favMovies, setFavMovies] = useState([]);

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // get favList
  useEffect(() => {
    const savedFavMovies = localStorage.getItem("favList");
    if (savedFavMovies) {
      setFavMovies(JSON.parse(savedFavMovies));
      // setTotalPages(Math.ceil(favMovies.length) / moviesPerPage);
    }
    // console.log(savedFavMovies);
  }, []);

  const moviesPerPage = 4;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentPageMoveis = favMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(favMovies.length) / moviesPerPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Nav />
      <div>
        <p className={styles.title}>My List</p>
        <div className={styles.container}>
          {currentPageMoveis.length > 0 ? (
            currentPageMoveis.map((movie) => (
              <MovieInfo
                key={movie.id}
                id={movie.id}
                title={movie.title}
                coverImg={movie.medium_cover_image}
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
        {currentPageMoveis.length > 0 ? (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(favMovies.length / moviesPerPage)}
            handlePageClick={handlePageClick}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}
