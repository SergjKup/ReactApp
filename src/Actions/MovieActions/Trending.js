import { TRENDING_MOVIE } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: TRENDING_MOVIE,
  payload,
});

const searchTrending = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data.results)))
    .catch((error) => console.log(error));
};
export default searchTrending;
