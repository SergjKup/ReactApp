import { TRENDING_TV } from "../../Actions/Types";

const initialState = {
  result: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TRENDING_TV:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
}
