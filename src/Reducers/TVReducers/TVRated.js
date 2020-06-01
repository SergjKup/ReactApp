import { TV_RATED, DELETE_TV_RATED } from "../../Actions/Types";

const initialState = {
  ratedTV: [],
};

export default function (state = initialState, action) {
  let ratedTV;
  if (action.type === "TV_RATED") {
    const newItem = action.payload;
    ratedTV = state.ratedTV.slice();
    ratedTV.push(newItem);
  } else if (action.type === "DELETE_TV_RATED") {
    const id = action.payload;
    ratedTV = state.ratedTV.slice();
    ratedTV.filter((cur, index) => {
      if (cur.id == id) {
        return ratedTV.splice(index, 1);
      }
    });
  }
  switch (action.type) {
    case TV_RATED:
      return {
        ratedTV,
      };
    case DELETE_TV_RATED:
      return {
        ratedTV,
      };
    default:
      return state;
  }
}
