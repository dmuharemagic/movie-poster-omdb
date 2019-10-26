import React, { useReducer } from 'react';
import axios from 'axios';

import PostersContext from './postersContext';
import PostersReducer from './postersReducer';

import { SEARCH_POSTERS, SEARCH_POSTERS_ERROR, SET_LOADING, CLEAR_POSTERS, GET_POSTER } from '../types';

const PostersState = props => {
  const initialState = {
    posters: [],
    poster: {},
    loading: false,
    error: false
  };

  const [state, dispatch] = useReducer(PostersReducer, initialState);

  // Search posters
  const searchPosters = async text => {
    setLoading();

    const res = await axios.get(`https://omdbapi.com/?s=${text}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);

    if (res.data.Error !== undefined) {
      dispatch({ type: SEARCH_POSTERS_ERROR });
    } else {
      dispatch({ type: SEARCH_POSTERS, payload: res.data.Search });
    }
  };

  // Get individual poster
  const getPoster = async id => {
    setLoading();

    const res = await axios.get(`https://omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);

    dispatch({ type: GET_POSTER, payload: res.data });
  };

  // Clear posters
  const clearPosters = () => dispatch({ type: CLEAR_POSTERS });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PostersContext.Provider
      value={{
        posters: state.posters,
        poster: state.poster,
        loading: state.loading,
        error: state.error,
        searchPosters,
        clearPosters,
        getPoster
      }}
    >
      {props.children}
    </PostersContext.Provider>
  );
};

export default PostersState;
