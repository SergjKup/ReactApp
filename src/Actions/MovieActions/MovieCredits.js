import { MOVIE_CREDITS } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: MOVIE_CREDITS,
  payload,
});

const movieCredits = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data)))
    .catch((error) => console.log(error));
};
export default movieCredits;
