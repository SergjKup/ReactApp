import { TV_FAVORITE, DELETE_TV_FAVORITE } from "../../Actions/Types";

const initialState = {
  favTV: [],
};

export default function (state = initialState, action) {
  let favTV;
  if (action.type === "TV_FAVORITE") {
    const newItem = action.payload;
    favTV = state.favTV.slice();
    favTV.push(newItem);
  } else if (action.type === "DELETE_TV_FAVORITE") {
    const id = action.payload;
    favTV = state.favTV.slice();
    favTV.filter((cur, index) => {
      if (cur.id == id) {
        return favTV.splice(index, 1);
      }
    });
  }
  switch (action.type) {
    case TV_FAVORITE:
      return {
        favTV,
      };
    case DELETE_TV_FAVORITE:
      return {
        favTV,
      };
    default:
      return state;
  }
}
