import { TOP_RATED_MOVIES } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: TOP_RATED_MOVIES,
  payload,
});

const movieTopRated = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data.results)))
    .catch((error) => console.log(error));
};
export default movieTopRated;
