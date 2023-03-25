import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Coverflow from "react-coverflow";

import styles from "./Home.module.css";

import Nav from "../components/Nav";
import Slide from "../components/Slide";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import HomeLoader from "../components/HomeLoader";

export default function Home() {
  // movie api : https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
  // movie details api: https://yts.mx/api/v2/movie_details.json?movie_id=15527
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

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
  // console.log(movies);

  return (
    <div>
      {loading ? (
        <HomeLoader />
      ) : (
        <div>
          <Nav />
          <p className={styles.title}>Welcome to RINFLIX</p>

          <div className={styles.middle}>
            {/* coverflow */}
            <Coverflow
              displayQuantityOfSide={3}
              navigation={false}
              infiniteScroll={false}
              enableHeading={true}
              clickable={true}
              enableScroll={true}
              // active={0}
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

            {/* Slide */}
            {/* Now Trending */}
            <div className={styles.slideCont}>
              <NavLink to="nowTrending">
                <div className={styles.linkCont}>
                  <p className={styles.subTitle}>Now Trending</p>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#66FCF1"
                    size="xl"
                  />
                </div>
              </NavLink>
              <Slide
                apiLink={`https://yts.mx/api/v2/list_movies.json?limit=10&minimum_rating=9&sort_by=year`}
              />
            </div>

            {/* Romance */}
            <div className={styles.slideCont}>
              <NavLink to="Romance">
                <div className={styles.linkCont}>
                  <p className={styles.subTitle}>Romance</p>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#66FCF1"
                    size="xl"
                  />
                </div>
              </NavLink>
              <Slide
                apiLink={`https://yts.mx/api/v2/list_movies.json?limit=10&genre=romance`}
              />
            </div>

            {/* Thriller */}
            <div className={styles.slideCont}>
              <NavLink to="Thriller">
                <div className={styles.linkCont}>
                  <p className={styles.subTitle}>Thriller</p>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#66FCF1"
                    size="xl"
                  />
                </div>
              </NavLink>
              <Slide
                apiLink={`https://yts.mx/api/v2/list_movies.json?limit=10&genre=thriller`}
              />
            </div>

            {/* Family */}
            <div className={styles.slideCont}>
              <NavLink to="Family">
                <div className={styles.linkCont}>
                  <p className={styles.subTitle}>Family</p>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#66FCF1"
                    size="xl"
                  />
                </div>
              </NavLink>
              <Slide
                apiLink={`https://yts.mx/api/v2/list_movies.json?limit=10&genre=family`}
              />
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
}
