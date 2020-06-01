import { SEARCHING } from "../Actions/Types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCHING:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
}
