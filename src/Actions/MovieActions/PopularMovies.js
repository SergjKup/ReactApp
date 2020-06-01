import { POPULAR_MOVIES } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: POPULAR_MOVIES,
  payload,
});

const moviePopular = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data.results)))
    .catch((error) => console.log(error));
};
export default moviePopular;
