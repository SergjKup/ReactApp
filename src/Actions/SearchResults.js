import { SEARCH_MOVIE } from "./Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: SEARCH_MOVIE,
  payload,
});

const searchResults = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data)))
    .catch((error) => console.log(error));
};
export default searchResults;
