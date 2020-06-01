import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import throttle from "lodash/throttle";
import BaseReducer from "./Reducers/BaseReducer";

const initialState = {};

const loadState = () => {
  try {
    const movieFavorite = localStorage.getItem("state");
    if (movieFavorite === null) return undefined;
    return JSON.parse(movieFavorite);
  } catch (err) {
    return undefined;
  }
};
const saveState = (state) => {
  try {
    const movieFavorite = JSON.stringify(state);
    return localStorage.setItem("state", movieFavorite);
  } catch (err) {
    return undefined;
  }
};

const persist = loadState();

const middleware = [thunk];
const store = createStore(
  BaseReducer,
  persist,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

store.subscribe(
  throttle(() => {
    saveState({
      movieFavorite: store.getState().movieFavorite,
      tvFavorite: store.getState().tvFavorite,
      movieRated: store.getState().movieRated,
      tvRated: store.getState().tvRated,
      session: store.getState().session,
    });
  }, 1000)
);

export default store;
