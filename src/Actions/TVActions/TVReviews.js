import { TV_REVIEWS } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: TV_REVIEWS,
  payload,
});

const tvReviews = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data)))
    .catch((error) => console.log(error));
};

export default tvReviews;
