import { MOVIE_RATED, DELETE_MOVIE_RATED } from "../Types";

const saveData = (payload) => ({
  type: MOVIE_RATED,
  payload,
});

const deleteRated = (payload) => ({
  type: DELETE_MOVIE_RATED,
  payload,
});
export const ratedMovie = (movie) => (dispatch) => {
  dispatch(saveData(movie));
};

export const deleteRatedMovie = (movie) => (dispatch) => {
  dispatch(deleteRated(movie));
};
