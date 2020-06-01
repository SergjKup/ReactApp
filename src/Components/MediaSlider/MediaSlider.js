import React from "react";
import { Link } from "react-router-dom";
import "./MediaSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronRight, faChevronLeft,} from "@fortawesome/free-solid-svg-icons";

const MediaSlider = (props) => {
  const config = props.config;
  const slides = props.slides;
  const type = props.type;

  return (
    <div className="swiper-container media-container">
      <h1>{props.title}</h1>
      <div className="swiper-wrapper media-wrapper">
        {slides
          ? slides.map((cur) => (
              <Link
                to={`/details/${props.type.toLowerCase()}/${cur.id}`}
                key={cur.id}
                className="swiper-slide media-slide"
              >
                <span>
                  <FontAwesomeIcon icon={faStar} /> {cur.vote_average}
                </span>
                <figure className="media-figure">
                  <img
                    src={`${
                      config.images ? config.images.secure_base_url : ""
                    }${config.images ? config.images.poster_sizes[6] : ""}${
                      cur.poster_path
                    }`}
                    alt={cur.title}
                  />
                </figure>
                <h4>{type === "MOVIE" ? cur.title : cur.original_name}</h4>
                <p>{}</p>
              </Link>
            ))
          : ""}
      </div>
      <span className="media-btn-prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
      <span className="media-btn-next">
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </div>
  );
};

export default MediaSlider;
