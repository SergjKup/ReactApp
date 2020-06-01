import { TV_RATED, DELETE_TV_RATED } from "../Types";

const saveTV = (payload) => ({
  type: TV_RATED,
  payload,
});

const deleteTV = (payload) => ({
  type: DELETE_TV_RATED,
  payload,
});

export const ratedTV = (tv) => (dispatch) => {
  dispatch(saveTV(tv));
};

export const deleteRatedTV = (tv) => (dispatch) => {
  dispatch(deleteTV(tv));
};
