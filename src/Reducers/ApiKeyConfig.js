import { API_KEY_CONFIG } from "../Actions/Types";

const initialState = {
  apiKey: "5bb97bbb23814c0b31a762c54ba8c5a1",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case API_KEY_CONFIG:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
