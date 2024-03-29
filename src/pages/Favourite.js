import React, { useState, useEffect } from "react";

import styles from "./Favourite.module.css";
import Nav from "../components/Nav";
import MovieInfo from "../components/MovieInfo";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";

export default function Favourite() {
  // for data
  const [favMovies, setFavMovies] = useState([]);

  // for hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // get favList
  useEffect(() => {
    const savedFavMovies = localStorage.getItem("favList");
    if (savedFavMovies) {
      setFavMovies(JSON.parse(savedFavMovies));
    }
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
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div>
        <p className={styles.title}>My List</p>
        <div className={styles.container}>
          {currentPageMoveis.length > 0 ? (
            currentPageMoveis.map((movie) => (
              <MovieInfo
                key={movie.id}
                id={movie.id}
                title={movie.title}
                coverImg={movie.coverImg}
                rating={movie.rating}
                movieYear={movie.movieYear}
                genres={movie.genres}
                summary={movie.summary}
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
