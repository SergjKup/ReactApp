import { API_KEY_CONFIG } from "./Types";
import Axios from "axios";

const saveApiKeyConfig = (payload) => ({
  type: API_KEY_CONFIG,
  payload,
});

const apiKeyConfig = (url) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveApiKeyConfig(response.data)))
    .catch((error) => console.log(error));
};
export default apiKeyConfig;
