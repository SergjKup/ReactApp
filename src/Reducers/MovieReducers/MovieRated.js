import { MOVIE_RATED, DELETE_MOVIE_RATED } from "../../Actions/Types";

const initialState = {
  ratedMovie: [],
};

export default function (state = initialState, action) {
  let ratedMovie;
  if (action.type === "MOVIE_RATED") {
    const newItem = action.payload;
    ratedMovie = state.ratedMovie.slice();
    ratedMovie.push(newItem);
  } else if (action.type === "DELETE_MOVIE_RATED") {
    const id = action.payload;
    ratedMovie = state.ratedMovie.slice();
    ratedMovie.filter((cur, index) => {
      if (cur.id == id) {
        return ratedMovie.splice(index, 1);
      }
    });
  }
  switch (action.type) {
    case MOVIE_RATED:
      return {
        ratedMovie,
      };
    case DELETE_MOVIE_RATED:
      return {
        ratedMovie,
      };
    default:
      return state;
  }
}
