import { MOVIE_DETAILS } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: MOVIE_DETAILS,
  payload,
});

const movieDetails = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data)))
    .catch((error) => console.log(error));
};
export default movieDetails;
