import { TOP_RATED } from "../../Actions/Types";

const initialState = {
  results: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOP_RATED:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
}
