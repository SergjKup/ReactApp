import { UPCOMING_MOVIES } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: UPCOMING_MOVIES,
  payload,
});

const movieUpcoming = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data.results)))
    .catch((error) => console.log(error));
};
export default movieUpcoming;
