import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";

// css
import styles from "./Search.module.css";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Movie from "../components/Movie";

export default function Search() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filterTitle = movies.filter((m) => {
    return m.title.replace(
      " ",
      "".toLowerCase().includes(search.toLowerCase().replace(" ", ""))
    );
  });

  console.log(filterTitle);

  const searchMovie = () => {
    if (search === "") {
      return;
    } else if (filterTitle.length < 1) {
      return <p>Couldn't find</p>;
    }
  };

  return (
    <div>
      <Nav />
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
        <div className={styles.content}>
          {filterTitle.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              rating={movie.rating}
              movieYear={movie.year}
              genres={movie.genres}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
