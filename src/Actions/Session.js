import { TOKEN, SESSION_TYPE } from "./Types";
import Axios from "axios";

const saveData = (payload) => ({
  type: SESSION_TYPE,
  payload,
});
const saveToken = (payload) => ({
  type: TOKEN,
  payload,
});

export const getSession = (url, session) => (dispatch) => {
  Axios.get(url)
    .then((response) => dispatch(saveToken(response.data.guest_session_id)))
    .catch((error) => console.log(error));
  dispatch(saveToken(url));
  dispatch(saveData(session));
};
export const logOut = (session) => (dispatch) => {
  dispatch(saveData(session));
};
