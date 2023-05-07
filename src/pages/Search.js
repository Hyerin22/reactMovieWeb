import React, { useState, useEffect } from "react";

// components
import Nav from "../components/Nav";
import Movie from "../components/Movie";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import Pagination from "../components/Pagination";

// css
import styles from "./Search.module.css";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  // for data
  const [movies, setMovies] = useState([]);
  // for searching
  const [search, setSearch] = useState("");
  // for hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // for importing data
  const getMovies = async () => {
    const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=rating&limit=50`;
    const json = await (await fetch(url)).json();
    setMovies(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  const filterTitle = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  const moviesPerPage = 8;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filterTitle.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filterTitle.length) / moviesPerPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const searchMovie = () => {
    if (search === "") {
      return null;
    } else if (currentMovies.length < 1) {
      return <p className={styles.notFound}>Couldn't find</p>;
    } else {
      return currentMovies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          rating={movie.rating}
          movieYear={movie.year}
          genres={movie.genres}
        />
      ));
    }
  };

  return (
    <div>
      <Nav />
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className={styles.container}>
        <div className={styles.search}>
          <div className={styles.input}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              color="#66FCF1"
              size="xl"
            />
            <input
              type="text"
              placeholder="Search here"
              value={search}
              onChange={onChange}
            />
          </div>
        </div>
        <div className={styles.found}>{searchMovie()}</div>
        {currentMovies.length < 1 ? (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filterTitle.length / moviesPerPage)}
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
