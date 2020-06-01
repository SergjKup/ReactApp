import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../Actions/Session";
import { deleteFavorite } from "../../Actions/MovieActions/MovieFavorite";
import { deleteRatedMovie } from "../../Actions/MovieActions/MovieRated";
import { deleteFavTV } from "../../Actions/TVActions/TVFavorite";
import { deleteRatedTV } from "../../Actions/TVActions/TVRated";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from '@material-ui/core/Button';

  const Profile = () => {
  const config = useSelector((state) => state.apiKeyConfig.images);
  const dispatch = useDispatch();
  const { favMovies } = useSelector((state) => state.movieFavorite);
  const { favTV } = useSelector((state) => state.tvFavorite);
  const { ratedMovie } = useSelector((state) => state.movieRated);
  const { ratedTV } = useSelector((state) => state.tvRated);
  const [currentMediaString, setCurrentMediaString] = useState(
    "Favorite Movies"
  );
  const [currentMedia, setCurrentMedia] = useState(favMovies);
  const [page, setPage] = useState(1);

  const alert = () => {
    const deletedAlert = document.querySelector(".deleted-alert");
    deletedAlert.classList.remove("deactivate-alert");
    setTimeout(() => {
      deletedAlert.classList.add("deactivate-alert");
    }, 1000);
  };
  const deleteItem = (e) => {
    const id = e.target.dataset.id;
      if (
      currentMediaString === "Favorite Movies" &&
      id !== undefined &&
      !isNaN(id)
    ) {
      dispatch(deleteFavorite(id));
      alert();
    } else if (
      currentMediaString === "Favorite TV" &&
      id !== undefined &&
      !isNaN(id)
    ) {
      dispatch(deleteFavTV(id));
      alert();
    } else if (
      currentMediaString === "Rated Movies" &&
      id !== undefined &&
      !isNaN(id)
    ) {
      dispatch(deleteRatedMovie(id));
      alert();
    } else if (
      currentMediaString === "Rated TV" &&
      id !== undefined &&
      !isNaN(id)
    ) {
      dispatch(deleteRatedTV(id));
      alert();
    }
  };
  const renderMedia = (type, array, pageNum) => {
    let media;
    let lastIndex = pageNum * 12;
    let firstIndex = lastIndex - 12;
    let newArr = array.slice(firstIndex, lastIndex);
    if (type === "Favorite Movies") {
      media =
        newArr.length > 0
          ? newArr.map((cur, index) => (
              <div key={cur.id} className="profile-slide">
                <button
                  className="delete-btn"
                  data-id={cur.id}
                  onClick={deleteItem}
                >
                  <FontAwesomeIcon data-id={cur.id} icon={faTimes} />
                </button>
                <Link to={`/details/movie/${cur.id}`}>
                  <figure className="profile-figure">
                    <img
                      src={
                        config
                          ? config.secure_base_url +
                            config.poster_sizes[2] +
                            cur.img
                          : ""
                      }
                      alt={cur.title}
                    />
                  </figure>
                  <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                  </div>
                </Link>
              </div>
            ))
          : "Please Favorite Movies To See";
    } else if (type === "Favorite TV") {
      media =
        newArr.length > 0
          ? newArr.map((cur, index) => (
              <div key={cur.id} className="profile-slide">
                <button
                  className="delete-btn"
                  data-id={cur.id}
                  onClick={deleteItem}
                >
                  <FontAwesomeIcon data-id={cur.id} icon={faTimes} />
                </button>
                <Link
                  to={`/details/tv/${cur.id}`}
                  key={cur.id}
                  className="profile-slide"
                >
                  <figure className="profile-figure">
                    <img
                      src={
                        config
                          ? config.secure_base_url +
                            config.poster_sizes[2] +
                            cur.img
                          : ""
                      }
                      alt={cur.title}
                    />
                  </figure>
                  <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                  </div>
                </Link>
              </div>
            ))
          : "Please Favorite TV To See";
    } else if (type === "Rated Movies") {
      media =
        newArr.length > 0
          ? newArr.map((cur, index) => (
              <div key={cur.id} className="profile-slide">
                <button
                  className="delete-btn"
                  data-id={cur.id}
                  onClick={deleteItem}
                >
                  <FontAwesomeIcon data-id={cur.id} icon={faTimes} />
                </button>
                <Link
                  to={`/details/movie/${cur.id}`}
                  key={cur.id}
                  className="profile-slide"
                >
                  <figure className="profile-figure">
                    <img
                      src={
                        config
                          ? config.secure_base_url +
                            config.poster_sizes[2] +
                            cur.img
                          : ""
                      }
                      alt={cur.title}
                    />
                  </figure>
                  <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                    <p>
                      Твой рейтинг {cur.ourRating}{" "}
                      <FontAwesomeIcon icon={faStar} />
                    </p>
                  </div>
                </Link>
              </div>
            ))
          : "Please Favorite TV To See";
    } else if (type === "Rated TV") {
      media =
        newArr.length > 0
          ? newArr.map((cur, index) => (
              <div key={cur.id} className="profile-slide">
                <button
                  className="delete-btn"
                  data-id={cur.id}
                  onClick={deleteItem}
                >
                  <FontAwesomeIcon data-id={cur.id} icon={faTimes} />
                </button>
                <Link
                  to={`/details/tv/${cur.id}`}
                  key={cur.id}
                  className="profile-slide"
                >
                  <figure className="profile-figure">
                    <img
                      src={
                        config
                          ? config.secure_base_url +
                            config.poster_sizes[2] +
                            cur.img
                          : ""
                      }
                      alt={cur.title}
                    />
                  </figure>
                  <div>
                    <h4>{cur.title}</h4>
                    <p>{cur.genres[0].name}</p>
                    <p>
                      Твой рейтинг {cur.ourRating}{" "}
                      <FontAwesomeIcon icon={faStar} />
                    </p>
                  </div>
                </Link>
              </div>
            ))
          : "Пожалуйста, ваши любимые ТВ-шоу";
    }
    return media;
  };
  const hamburgerMenu = (e) => {
    e.target.classList.toggle("change");
    e.target.parentNode.classList.toggle("slide-profile-nav-container");
  };
  const mediaButtons = (e) => {
    const mediaButtons = document.querySelectorAll(".profile-btn");
    const element = e.target.innerText;
    if (e.target.tagName === "BUTTON") {
      setCurrentMediaString(element);
      mediaButtons.forEach((cur, i) => {
        cur =
          cur.innerText !== element ? cur.classList.remove("active-btn") : "";
      });
      mediaButtons.forEach((cur, i) => {
        cur = cur.innerText === element ? cur.classList.add("active-btn") : "";
      });
    }
    setPage(1);
  };

  useEffect(() => {
    let recharge;
    if (currentMediaString === "Favorite Movies") {
      recharge = favMovies;
    } else if (currentMediaString === "Favorite TV") {
      recharge = favTV;
    } else if (currentMediaString === "Rated Movies") {
      recharge = ratedMovie;
    } else if (currentMediaString === "Rated TV") {
      recharge = ratedTV;
    }
    setCurrentMedia(recharge);
  }, [
    setCurrentMedia,
    currentMediaString,
    favMovies,
    favTV,
    ratedMovie,
    ratedTV,
  ]);

  return (
    <div id="profile-container">
      <section className="profile-nav-container">
        <button className="ham-btn-container" onClick={hamburgerMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <div>
          <figure className="avatar-figure">
            <img
              src={"https://cdn.onlinewebfonts.com/svg/img_568656.png"}
              alt={""}
            />
          </figure>
          <p>Добро пожаловать, Гость!</p>
          <Link to={"/"} onClick={() => dispatch(logOut("public"))}>
            Выйти
          </Link>
        </div>
        <div className="toggle-btn-container" onClick={mediaButtons}>
          <Button variant="contained" color="secondary"
            className="profile-btn active-btn"
            name="favMovies"
            onClick={() => setCurrentMedia(favMovies)}
          >
            Любимые фильмы
          </Button>
          <Button variant="contained" color="secondary"
            className="profile-btn"
            name="favTV"
            onClick={() => setCurrentMedia(favTV)}
          >
            Любимые ТВ-шоу
          </Button>
          <Button variant="contained" color="secondary"
            className="profile-btn"
            name="ratedMovies"
            onClick={() => setCurrentMedia(ratedMovie)}
          >
            Фильмы по рейтингу
          </Button>
          <Button variant="contained" color="secondary"
            className="profile-btn"
            name="ratedTV"
            onClick={() => setCurrentMedia(ratedTV)}
          >
            ТВ-шоу по рейтингу
          </Button>
        </div>
        <Link to={"/"}>Главная</Link>
      </section>
      <div>
        <h1>{currentMediaString}</h1>
        <div className="deleted-alert deactivate-alert">
          <p>Удалено!</p>
        </div>
        <section className="profile-media-container">
          <div className="profile-media-wrapper">
            {renderMedia(currentMediaString, currentMedia, page)}
          </div>
        </section>
        <section className="profile-btn-container">
          <button
            id="prev"
            className="prev-profile"
            onClick={() => setPage(page === 1 ? 1 : page - 1)}
          >
            Предыдущая
          </button>{" "}
          Страница {page} из{Math.ceil(currentMedia.length / 12)}
          <button
            id="next"
            className="next-profile"
            onClick={() => setPage(page === Math.ceil(currentMedia.length / 12) ? page : page + 1)}>
            Следущая
          </button>
        </section>
      </div>
    </div>
  );
};

export default Profile;
