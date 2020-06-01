import { SET_MEDIA_TYPE_TV, SET_MEDIA_TYPE_MOVIE } from "../Actions/Types";

const initialState = {
  itemType: "MOVIE",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MEDIA_TYPE_MOVIE:
      return {
        itemType: "MOVIE",
      };
    case SET_MEDIA_TYPE_TV:
      return {
        itemType: "TV",
      };
    default:
      return state;
  }
}
