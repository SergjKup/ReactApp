import { TOP_RATED_MOVIES } from "../../Actions/Types";

const initialState = {
  results: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOP_RATED_MOVIES:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
}
