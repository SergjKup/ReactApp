import { MOVIE_GENRE } from "../../Actions/Types";

const initialState = {
  genres: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOVIE_GENRE:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
}
