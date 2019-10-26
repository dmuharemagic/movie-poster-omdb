import { SEARCH_POSTERS, SEARCH_POSTERS_ERROR, SET_LOADING, CLEAR_POSTERS, GET_POSTER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_POSTERS:
      return {
        ...state,
        posters: action.payload,
        loading: false,
        error: false
      };
    case SEARCH_POSTERS_ERROR:
      return {
        ...state,
        posters: [],
        loading: false,
        error: true
      };
    case GET_POSTER:
      return {
        ...state,
        poster: action.payload,
        loading: false,
        error: false
      };
    case CLEAR_POSTERS:
      return {
        ...state,
        posters: [],
        loading: false,
        error: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
