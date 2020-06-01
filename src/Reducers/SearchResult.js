import { SEARCH_MOVIE } from "../Actions/Types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
}
