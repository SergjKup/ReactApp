import { MOVIE_REVIEWS } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: MOVIE_REVIEWS,
  payload,
});

const movieReviews = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data)))
    .catch((error) => console.log(error));
};
export default movieReviews;
