import { TOP_RATED } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: TOP_RATED,
  payload,
});

const tvTopRated = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data.results)))
    .catch((error) => console.log(error));
};

export default tvTopRated;
