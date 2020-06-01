import { combineReducers } from "redux";
import apiKeyConfig from "./ApiKeyConfig";
import setMediaType from "./SetMediaType";
import searchResult from "./SearchResult";
import session from "./Session";
import trendingMovie from "./MovieReducers/Trending";
import movieCredits from "./MovieReducers/MovieCredits";
import movieDetails from "./MovieReducers/MovieDetails";
import movieGenre from "./MovieReducers/MovieGenre";
import movieReviews from "./MovieReducers/MovieReviews";
import movieTrailers from "./MovieReducers/MovieTrailers";
import nowPlayingMovies from "./MovieReducers/NowPlayingMovies";
import popularMovies from "./MovieReducers/PopularMovies";
import topRatedMovies from "./MovieReducers/TopRatedMovies";
import upcomingMovies from "./MovieReducers/UpComingMovies";
import movieFavorite from "./MovieReducers/MovieFavorite";
import movieRated from "./MovieReducers/MovieRated";
import trendingTV from "./TVReducers/Trending";
import tvCredits from "./TVReducers/TVCredits";
import tvDetails from "./TVReducers/TVDetails";
import tvGenre from "./TVReducers/TVGenre";
import tvReviews from "./TVReducers/TVReviews";
import tvTrailers from "./TVReducers/TVTrailers";
import tvairingToday from "./TVReducers/TVAiringToday";
import tvonAir from "./TVReducers/TVOnAir";
import popularTV from "./TVReducers/TVPopular";
import topRated from "./TVReducers/TVTopRated";
import tvFavorite from "./TVReducers/TVFavorite";
import tvRated from "./TVReducers/TVRated";

export default combineReducers({
  apiKeyConfig,
  setMediaType,
  searchResult,
  trendingMovie,
  trendingTV,
  tvCredits,
  movieCredits,
  movieDetails,
  tvDetails,
  tvGenre,
  movieGenre,
  movieReviews,
  tvReviews,
  movieTrailers,
  tvTrailers,
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  tvairingToday,
  tvonAir,
  popularTV,
  topRated,
  movieFavorite,
  tvFavorite,
  movieRated,
  tvRated,
  session,
});
