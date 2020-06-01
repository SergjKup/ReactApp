import { TV_GENRE } from "../../Actions/Types";

const initialState = {
  genres: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TV_GENRE:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
}
