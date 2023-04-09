import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Detail.module.css";

import MovieDetail from "../components/MovieDetail";
import Nav from "../components/Nav";
import ContentLoader from "../components/ContentLoader";
import Footer from "../components/Footer";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <Nav />
      {loading ? (
        <ContentLoader marginB={100} />
      ) : (
        <div className={styles.container}>
          <div className={styles.imgBox}>
            <div className={styles.bgImg}>
              <img src={movie.background_image_original} alt="bg" />
            </div>
            <img
              className={styles.coverImg}
              src={movie.medium_cover_image}
              alt="cover"
            />
          </div>
          <MovieDetail
            title={movie.title}
            movieYear={movie.year}
            rating={movie.rating}
            runtime={movie.runtime}
            genres={movie.genres}
            summary={movie.description_full}
            id={movie.id}
            coverImg={movie.medium_cover_image}
          />
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
