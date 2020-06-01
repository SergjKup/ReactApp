import React from "react";
import Swiper from "swiper";
import { Link } from "react-router-dom";
import "./ItemCarousel.css";

const ItemCarousel = (props) => {
    (() => {
    const sliderItem = document.querySelector(".itemcarousel-container");
    if (!sliderItem) {
      return;
    }
    const slider = new Swiper(sliderItem, {
      init: true,
      direction: "verticle",
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      observer: true,
      observeSlideChildren: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  })();

  const config = props.config;
  const type = props.itemType;

  const getCategoryStr = (id) => {
    let category ;
    props.genreList.forEach((genre) => {
      if (genre.id === id[0]) {
        return (category = genre.name);
      }
    });
    return category;
  };

  return (
    <div className="itemcarousel-container">
      <div className="swiper-wrapper itemcarousel-wrapper">
        {props.slides.map((cur, i) => {
          if (i < 10) {
            return (
              <Link
                to={`/details/${type.toLowerCase()}/${cur.id}`}
                key={cur.id}
                className="swiper-slide itemcarousel-slide"
              >
                <figure className="itemcarousel-figure">
                  <img
                    src={
                      config.images
                        ? config.images.secure_base_url +
                          config.images.backdrop_sizes[2] +
                          cur.backdrop_path
                        : ""
                    }
                    alt={type === "TV" ? cur.name : cur.title}
                  />
                </figure>
                <div className="itemcarousel-info">
                  <p>Тренды</p>
                  <h2>{type === "TV" ? cur.name : cur.title}</h2>
                  <p>
                    {getCategoryStr(cur.genre_ids)} | {cur.vote_average}
                  </p>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};
export default ItemCarousel;
