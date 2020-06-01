import { MOVIE_TRAILERS } from '../../Actions/Types';

const initialState = {

};

export default function(state = initialState, action) {
    switch(action.type) {
        case MOVIE_TRAILERS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}