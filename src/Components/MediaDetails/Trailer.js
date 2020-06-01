import React from "react";
import Swiper from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight,  faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const Trailer = (props) => {
  const trailer = props.trailer.results;
  (() => {
    const swiperItem = document.querySelector(".trailer-container");
    if (!swiperItem) {
      return;
    }

    const carousel = new Swiper(swiperItem, {
      init: true,
      spaceBetween: 40,
      observer: true,
      navigation: {
        prevEl: ".trailer-slide-prev",
        nextEl: ".trailer-slide-next",
      },
    });
  })();
  return (
    <section id="trailers">
      <h1>Трейлеры</h1>
      <div className="trailer-container">
        <FontAwesomeIcon className="trailer-slide-prev" icon={faChevronLeft} />
        <FontAwesomeIcon className="trailer-slide-next" icon={faChevronRight} />
        <div className="swiper-wrapper trailer-wrapper">
          {trailer
            ? trailer.map((cur) => (
                <iframe
                  key={cur.id}
                  className="swiper-slide trailer-slide"
                  title="1"
                  length="520"
                  width="450"
                  src={`https://www.youtube.com/embed/${cur.key}`}
                ></iframe>
              ))
            : " Трейлеры не найдены..."}
        </div>
      </div>
    </section>
  );
};
export default Trailer;
