import { NOW_PLAYING_MOVIES } from "../Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: NOW_PLAYING_MOVIES,
  payload,
});

const movieNowPlaying = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveData(response.data.results)))
    .catch((error) => console.log(error));
};
export default movieNowPlaying;
