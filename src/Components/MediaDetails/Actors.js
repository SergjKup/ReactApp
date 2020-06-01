import React from "react";
import Swiper from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const Actors  = (props) => {
  const actors = props.actors;
  const config = props.config;
  (() => {
    const swiperItem = document.querySelector(".actors-container");
    if (!swiperItem) {
      return;
    }

    const carousel = new Swiper(swiperItem, {
      spaceBetween: 45,
      watchOverflow: true,
      navigation: {
        prevEl: ".actors-slide-prev",
        nextEl: ".actors-slide-next",
      },
    });
  })();
  return (
    <section>
      <h1>В ролях:</h1>
      <div className="swiper-container actors-container">
        <FontAwesomeIcon className="actors-slide-prev" icon={faChevronLeft} />
        <FontAwesomeIcon className="actors-slide-next" icon={faChevronRight} />
        <div className="swiper-wrapper actors-wrapper">
          {actors
            ? actors.map((cur) => (
                <div key={cur.id} className="swiper-slide actors-slide">
                  <img
                    src={
                      actors && config
                        ? config.secure_base_url +
                          config.profile_sizes[1] +
                          cur.profile_path
                        : ""
                    }
                    alt={cur.name}
                  />
                  <h4>{cur.name}</h4>
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};
export default Actors;
