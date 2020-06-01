import { TV_CREDITS } from "../../Actions/Types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case TV_CREDITS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
