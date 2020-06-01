import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faHeart, faStar, faTimes,} from "@fortawesome/free-solid-svg-icons";
import "./MediaDetails.css";
import Trailer from "./Trailer";
import Description from "./Description";
import Actors from "./Actors";
import Reviews from "./Reviews";
import Stars from "./Stars";
import creditsMovie from "../../Actions/MovieActions/MovieCredits";
import detailsMovie from "../../Actions/MovieActions/MovieDetails";
import reviewsMovie from "../../Actions/MovieActions/MovieReviews";
import trailersMovie from "../../Actions/MovieActions/MovieTrailers";
import { favoriteMovie } from "../../Actions/MovieActions/MovieFavorite";
import { ratedMovie } from "../../Actions/MovieActions/MovieRated";
import creditsTV from "../../Actions/TVActions/TVCredits";
import detailsTV from "../../Actions/TVActions/TVDetails";
import reviewsTV from "../../Actions/TVActions/TVReviews";
import trailersTV from "../../Actions/TVActions/TVTrailers";
import { favoriteTV } from "../../Actions/TVActions/TVFavorite";
import { ratedTV } from "../../Actions/TVActions/TVRated";

class MediaDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayRating: false,
      isFavorited: false,
    };
  }
  componentDidMount() {
    this.getMediaData(this.props.match.params.id);
    let mediaTypeArray =
      this.props.match.params.type === "movie"
        ? this.props.movieFavorite
        : this.props.tvFavorite;
    if (
      this.isFavorited(this.props.match.params.id, mediaTypeArray) === true &&
      this.props.session === "guest"
    ) {
      this.setState({ isFavorited: true });
    }
  }
  isFavorited = (id, array) => {
    let duplicate = false;
    id = parseInt(id);
    if (array.length > 0) {
      array.forEach((cur) => {
        if (cur.id === id) {
          duplicate = true;
        }
      });
    }
    return duplicate;
  };
  isDuplicate = (id, array) => {
    let duplicate = false;
    const sentMsg = document.querySelector(".sent");
    if (array.length > 0) {
      array.forEach((cur) => {
        if (cur.id === id) {
          duplicate = true;
          sentMsg.innerHTML = "<span>Ошибка </span>";
          sentMsg.classList.remove("deactivate-sent");
          setTimeout(() => {
            sentMsg.classList.add("deactivate-sent");
          }, 1000);
          setTimeout(() => {
            sentMsg.innerHTML = "<span>Отправлено!</span>";
          }, 1100);
        }
      });
    }
    return duplicate;
  };
  alert = () => {
    const sentMsg = document.querySelector(".sent");
    sentMsg.classList.remove("deactivate-sent");
    setTimeout(() => {
      sentMsg.classList.add("deactivate-sent");
    }, 1000);
  };
  isFavoriteColorChange = () => {
    if (document.querySelector(".favorite-media")) {
      document.querySelector(".favorite-media").style.color = "red";
    }
  };
  sendFavToStorage = () => {
      if (this.props.session === "public")
      return alert("Please use Guest Login to use this feature");
    let type = this.props.match.params.type;
      if (
      type === "movie" &&
      this.isDuplicate(this.props.movieDetails.id, this.props.movieFavorite) ===
        false &&
      this.props.session === "guest"
    ) {
      this.props.favoriteMovie({
        id: this.props.movieDetails.id,
        title: this.props.movieDetails.title,
        genres: this.props.movieDetails.genres,
        img: this.props.movieDetails.poster_path,
      });
      this.alert();
      this.isFavoriteColorChange();
    } else if (
      type === "tv" &&
      this.isDuplicate(this.props.tvDetails.id, this.props.tvFavorite) === false &&
      this.props.session === "guest"
    ) {
      this.props.favoriteTV({
        id: this.props.tvDetails.id,
        title: this.props.tvDetails.original_name,
        genres: this.props.tvDetails.genres,
        img: this.props.tvDetails.poster_path,
      });
      this.alert();
      this.isFavoriteColorChange();
    }
  };
  sendRatedToStorage = () => {
      if (this.props.session === "public")
      return alert("Please use Guest Login to use this feature");
     let type = this.props.match.params.type;
    const ratingNum = parseInt(document.querySelector("select").value) * 2;
    if (
      type === "movie" &&
      this.isDuplicate(this.props.movieDetails.id, this.props.movieRated) ===
        false &&
      this.props.session === "guest"
    ) {
      this.props.ratedMovie({
        id: this.props.movieDetails.id,
        title: this.props.movieDetails.title,
        genres: this.props.movieDetails.genres,
        img: this.props.movieDetails.poster_path,
        ourRating: ratingNum,
      });
      this.alert();
    } else if (
      type === "tv" && this.isDuplicate(this.props.tvDetails.id, this.props.tvRated) === false &&
      this.props.session === "guest"
    ) {
      this.props.ratedTV({
        id: this.props.tvDetails.id,
        title: this.props.tvDetails.original_name,
        genres: this.props.tvDetails.genres,
        img: this.props.tvDetails.poster_path,
        ourRating: ratingNum,
      });
      this.alert();
    }
  };
  displayRating = () => {
    const parent = document.querySelector(".rating-container");
    if (this.state.displayRating === false) {
      this.setState({ displayRating: true });
      parent.classList.add("animate-rating-container");
    } else {
      this.setState({ displayRating: false });
      parent.classList.remove("animate-rating-container");
    }
  };
  getMediaData = (id, type = this.props.match.params.type) => {
      if (type === "movie") {
      this.props.creditsMovie(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.props.apiKey}`
      );
      this.props.detailsMovie(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${this.props.apiKey}&language=ru-RU`
      );
      this.props.reviewsMovie(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.props.apiKey}&language=ru-RU&page=1`
      );
      this.props.trailersMovie(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.props.apiKey}&language=ru-RU`
      );
    } else if (type === "tv") {
      this.props.creditsTV(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${this.props.apiKey}&language=ru-RU`
      );
      this.props.detailsTV(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${this.props.apiKey}&language=ru-RU`
      );
      this.props.reviewsTV(
        `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${this.props.apiKey}&language=ru-RU&page=1`
      );
      this.props.trailersTV(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${this.props.apiKey}&language=ru-RU`
      );
    }
  };
  formatNumber = (num) => {
    let newArr = parseInt(num).toFixed(2).toString().split("").reverse();
    for (let i = 6; newArr.length > i; i += 4) {
    newArr.splice([i], 0, ",");
    }
    return newArr.reverse().join("");
  };

  config = this.props.config.images;

  header = (type) => {
    switch (type) {
      case "movie":
        return (
          <header>
            <span onClick={() => this.props.history.goBack()}>
              <FontAwesomeIcon icon={faCaretLeft} />
            </span>
            <span id="rating-container-btn" onClick={this.displayRating}>
              {this.state.displayRating === false ? (
                <FontAwesomeIcon icon={faStar} />
              ) : (
                <FontAwesomeIcon icon={faTimes} />
              )}
            </span>
            <div className="rating-container">
              <div>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button onClick={this.sendRatedToStorage}>Оценить!</button>
              </div>
            </div>
            <div className="sent deactivate-sent">
              <span>Отправлено!</span>
            </div>
            <figure>
              <img
                src={
                  this.config && this.props.movieDetails.backdrop_path
                    ? this.config.secure_base_url +
                      this.config.backdrop_sizes[2] +
                      this.props.movieDetails.backdrop_path
                    : ""} alt={this.props.movieDetails.title}/>
            </figure>
            <div className="movie-details-info">
              <img
                src={
                  this.config && this.props.movieDetails.poster_path
                    ? this.config.secure_base_url +
                      this.config.poster_sizes[3] +
                      this.props.movieDetails.poster_path
                    : ""
                }
                alt={this.props.movieDetails.title}
              />
              <div>
                <h2>{this.props.movieDetails.title}</h2>
                <div>
                  {this.props.movieDetails.vote_average}{" "}
                  <span className="rated">
                    <Stars rating={this.props.movieDetails.vote_average} />
                  </span>{" "}
                  |
                  {this.state.isFavorited === true ? (
                    <span
                      style={{ color: "red" }}
                      className="favorite-media"
                      onClick={this.sendFavToStorage}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                  ) : (
                    <span
                      style={{ color: "#ffffff" }}
                      className="favorite-media"
                      onClick={this.sendFavToStorage}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                  )}
                </div>
                <p>{this.props.movieDetails.status}</p>
                <p>
                  Бюджет ${this.formatNumber(this.props.movieDetails.budget)}
                </p>
                <p>
                  {this.props.movieDetails.genres
                    ? this.props.movieDetails.genres[0].name
                    : ""}
                </p>
              </div>
            </div>
          </header>
        );
      case "tv":
        return (
          <header>
            <span onClick={() => this.props.history.goBack()}>
              <FontAwesomeIcon icon={faCaretLeft} />
            </span>
            <span id="rating-container-btn" onClick={this.displayRating}>
              {this.state.displayRating === false ? (
                <FontAwesomeIcon icon={faStar} />
              ) : (
                <FontAwesomeIcon icon={faTimes} />
              )}
            </span>
            <div className="rating-container">
              <div>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button onClick={this.sendRatedToStorage}>Send Rating</button>
              </div>
            </div>
            <div className="sent deactivate-sent">
              <span>Отправлено!</span>
            </div>
            <figure>
              <img
                src={
                  this.config && this.props.tvDetails.backdrop_path
                    ? this.config.secure_base_url +
                      this.config.backdrop_sizes[2] +
                      this.props.tvDetails.backdrop_path
                    : ""
                }
                alt={this.props.tvDetails.name}
              />
            </figure>

            <div className="movie-details-info">
              <img
                src={
                  this.config && this.props.tvDetails.poster_path
                    ? this.config.secure_base_url +
                      this.config.poster_sizes[3] +
                      this.props.tvDetails.poster_path
                    : ""
                }
                alt={this.props.tvDetails.title}
              />
              <div>
                <h2>{this.props.tvDetails.name}</h2>
                <div>
                  <span className="rated" onClick={this.sendRatedToStorage}>
                    <Stars rating={this.props.tvDetails.vote_average} />
                  </span>{" "}|{this.state.isFavorited === true ? (<span style={{ color: "red" }}
                      className="favorite-media" onClick={this.sendFavToStorage}>
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                  ) : (
                    <span
                      style={{ color: "#ffffff" }}
                      className="favorite-media"
                      onClick={this.sendFavToStorage}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                  )}
                </div>
                <p>{this.props.tvDetails.status}</p>
                <p>
                  Бюджет ${this.formatNumber(this.props.movieDetails.budget)}
                </p>
                <p>
                  {this.props.tvDetails.genres
                    ? this.props.tvDetails.genres[0].name
                    : ""}
                </p>
              </div>
            </div>
          </header>
        );
      default:
        return null;
    }
  };
  description = (type) => {
    switch (type) {
      case "movie":
        return <Description description={this.props.movieDetails.overview} />;
      case "tv":
        return <Description description={this.props.tvDetails.overview} />;
      default:
        return null;
    }
  };
  actors = (type) => {
    switch (type) {
      case "movie":
        return (
          <Actors
          actors={this.props.movieCredits.cast}
            config={this.props.config.images}
          />
        );
      case "tv":
        return (
          <Actors
          actors={this.props.tvCredits.cast}
            config={this.props.config.images}
          />
        );
      default:
        return null;
    }
  };
  trailers = (type) => {
    switch (type) {
      case "movie":
        return <Trailer trailer={this.props.movieTrailers} />;
      case "tv":
        return <Trailer trailer={this.props.tvTrailers} />;
      default:
        return null;
    }
  };
  reviews = (type) => {
    switch (type) {
      case "movie":
        return <Reviews reviews={this.props.movieReviews} />;
      case "tv":
        return <Reviews reviews={this.props.tvReviews} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="media-details-container">
        {this.header(this.props.match.params.type)}
        <main className="movie-details-main">
          {this.description(this.props.match.params.type)}
          {this.actors(this.props.match.params.type)}
          {this.trailers(this.props.match.params.type)}
          {this.reviews(this.props.match.params.type)}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  apiKey: state.apiKeyConfig.apiKey,
  config: state.apiKeyConfig,
  type: state.setMediaType,
  token: state.session.token,
  session: state.session.session,

  movieCredits: state.movieCredits,
  movieDetails: state.movieDetails,
  movieReviews: state.movieReviews,
  movieTrailers: state.movieTrailers,
  movieFavorite: state.movieFavorite.favMovies,
  movieRated: state.movieRated.ratedMovie,

  tvCredits: state.tvCredits,
  tvDetails: state.tvDetails,
  tvReviews: state.tvReviews,
  tvTrailers: state.tvTrailers,
  tvFavorite: state.tvFavorite.favTV,
  tvRated: state.tvRated.ratedTV,
});

const mapDispatchToProps = (dispatch) => ({
  detailsMovie: (url) => dispatch(detailsMovie(url)),
  creditsMovie: (url) => dispatch(creditsMovie(url)),
  reviewsMovie: (url) => dispatch(reviewsMovie(url)),
  trailersMovie: (url) => dispatch(trailersMovie(url)),
  favoriteMovie: (movie) => dispatch(favoriteMovie(movie)),
  ratedMovie: (movie) => dispatch(ratedMovie(movie)),

  creditsTV: (url) => dispatch(creditsTV(url)),
  detailsTV: (url) => dispatch(detailsTV(url)),
  reviewsTV: (url) => dispatch(reviewsTV(url)),
  trailersTV: (url) => dispatch(trailersTV(url)),
  favoriteTV: (tv) => dispatch(favoriteTV(tv)),
  ratedTV: (tv) => dispatch(ratedTV(tv)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MediaDetails);
