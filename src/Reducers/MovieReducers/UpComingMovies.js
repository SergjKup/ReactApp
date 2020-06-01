import { UPCOMING_MOVIES } from "../../Actions/Types";

const initialState = {
  results: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPCOMING_MOVIES:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
}
