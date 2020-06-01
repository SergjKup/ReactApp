import { TV_AIRING_TODAY } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: TV_AIRING_TODAY,
  payload,
});

const tvAiringToday = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data.results)))
    .catch((error) => console.log(error));
};

export default tvAiringToday;
