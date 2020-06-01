import { TOKEN, SESSION_TYPE } from "../Actions/Types";

const initialState = {
  session: "public",
  token: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SESSION_TYPE:
      return {
        ...state,
        session: action.payload,
      };
    case TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}
