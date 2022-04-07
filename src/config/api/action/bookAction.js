import axios from 'axios';
import {BOOKS_API} from '../../api/baseAPI';

import {GET_BOOKS_RECOMMENDED, GET_BOOKS_POPULAR, GET_BOOKS_ID} from '../types';

export const saveBookPopular = data => ({
  type: GET_BOOKS_POPULAR,
  payload: data,
});

export const saveBookRecommended = data => ({
  type: GET_BOOKS_RECOMMENDED,
  payload: data,
});

export const saveBookId = data => ({
  type: GET_BOOKS_ID,
  payload: data,
});

export const getDataBooksRecommended = (token, limit) => async dispatch => {
  // dispatch(setLoading(true));
  try {
    await axios
      .get(BOOKS_API, {
        headers: {Authorization: `Bearer ${token}`},
        params: {limit},
      })
      .then(response => {
        dispatch(saveBookRecommended(response.data.results));
      });
  } catch (err) {
    console.log(err.message);
    // showError(err.message);
    // dispatch(refresh(false));
  }
};

// GET_BOOKS_API_POPULAR
export const getDataBooksPopular = token => async dispatch => {
  // dispatch(setLoading(true));
  try {
    await axios
      .get(BOOKS_API, {headers: {Authorization: `Bearer ${token}`}})
      .then(response => {
        dispatch(saveBookPopular(response.data.results));
      });
  } catch (err) {
    console.log(err.message);
    // showError(err.message);
    // dispatch(refresh(false));
    // dispatch(setLoading(false));
  }
};

// GET_BOOKS_API_BY_ID
export const getDataBooksId = (token, id) => async dispatch => {
  // dispatch(setLoading(true));
  try {
    await axios
      .get(`${BOOKS_API}/${id}`, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(response => {
        dispatch(saveBookId(response.data));
      });
  } catch (err) {
    console.log(err.message);
    // showError(err.message);
    // dispatch(refresh(false));
    // dispatch(setLoading(false));
  }
};
