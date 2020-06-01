import { TV_CREDITS } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: TV_CREDITS,
  payload,
});

const tvCredits = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data)))
    .catch((error) => console.log(error));
};

export default tvCredits;
