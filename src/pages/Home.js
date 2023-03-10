import { useState, useEffect } from "react";
import Coverflow from "react-coverflow";

import styles from "./Home.module.css";

import Movie from "../components/Movie";
import Nav from "../components/Nav";

export default function Home() {
  // movie api : https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
  // movie details api: https://yts.mx/api/v2/movie_details.json?movie_id=15527
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fn = function () {
    /* do your action */
  };

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <Nav />
          <p className={styles.title}>Welcome to RINFLIX</p>
          <Coverflow
            displayQuantityOfSide={3}
            navigation={false}
            infiniteScroll={true}
            enableHeading={true}
            clickable={true}
            active={0}
            media={{
              "@media (max-width: 900px)": {
                width: "600px",
                height: "300px",
              },
              "@media (min-width: 900px)": {
                width: "1100px",
                height: "600px",
              },
            }}
          >
            {movies.map((movie) => (
              <img
                src={movie.medium_cover_image}
                alt={movie.title}
                // eslint-disable-next-line no-template-curly-in-string
                data-action="/movie/${movie.id}"
              />
            ))}
          </Coverflow>

          {/* {movies.map((movie) => (
            <Movie
              // key is only for react.js
              // when you render the component, key should be in the App.js
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))} */}
        </div>
      )}
    </div>
  );
}
