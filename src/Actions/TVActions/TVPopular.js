import { POPULAR_TV } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: POPULAR_TV,
  payload,
});

const tvPopular = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data.results)))
    .catch((error) => console.log(error));
};

export default tvPopular;
