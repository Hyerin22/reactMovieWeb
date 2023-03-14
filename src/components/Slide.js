import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import styles from "./Slide.module.css";

export default function Slide({
  id,
  title = "title",
  coverImg,
  movieTitle,
  content,
}) {
  return (
    <div>
      {/* <div>
        <p>{title}</p>
      </div> */}
      <div className={styles.slideCont}>
        <Slider
          className="box"
          dots={true}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={false}
          arrows={true}
        >
          {/* {content} */}
          {/* <Link to={`/movie/${id}`}> */}
          <img src={coverImg} alt={movieTitle} />
          <p>{movieTitle}</p>
          {/* </Link> */}
        </Slider>
      </div>
    </div>
  );
}
