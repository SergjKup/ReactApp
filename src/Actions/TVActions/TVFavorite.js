import { TV_FAVORITE, DELETE_TV_FAVORITE } from "../Types";

const saveTV = (payload) => ({
  type: TV_FAVORITE,
  payload,
});

const deleteTV = (payload) => ({
  type: DELETE_TV_FAVORITE,
  payload,
});

export const favoriteTV = (tv) => (dispatch) => {
  dispatch(saveTV(tv));
};

export const deleteFavTV = (tv) => (dispatch) => {
  dispatch(deleteTV(tv));
};
