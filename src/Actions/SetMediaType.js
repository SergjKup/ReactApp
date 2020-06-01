import { SET_MEDIA_TYPE_TV, SET_MEDIA_TYPE_MOVIE } from "../Actions/Types";

const setMediaType = (type) => ({
  type: type === "TV" ? SET_MEDIA_TYPE_TV : SET_MEDIA_TYPE_MOVIE,
});

export default setMediaType;
