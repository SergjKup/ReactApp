import { MOVIE_TRAILERS } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: MOVIE_TRAILERS,
  payload,
});

const movieTrailers = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data)))
    .catch((error) => console.log(error));
};
export default movieTrailers;
