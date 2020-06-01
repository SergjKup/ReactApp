import { TV_ON_THE_AIR } from "../../Actions/Types";

const initialState = {
  results: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TV_ON_THE_AIR:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
}
