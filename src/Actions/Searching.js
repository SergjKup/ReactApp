import { SEARCHING } from "./Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: SEARCHING,
  payload,
});

const searching = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data)))
    .catch((error) => console.log(error));
};
export default searching;
