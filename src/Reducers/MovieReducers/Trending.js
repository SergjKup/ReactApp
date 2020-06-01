import { TRENDING_MOVIE } from "../../Actions/Types";

const initialState = {
  result: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TRENDING_MOVIE:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
}
