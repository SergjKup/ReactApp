import { TV_DETAILS } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: TV_DETAILS,
  payload,
});

const tvDetails = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data)))
    .catch((error) => console.log(error));
};

export default tvDetails;
