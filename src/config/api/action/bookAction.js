import axios from 'axios';
import {BOOKS_API} from '../../api/baseAPI';

import {BOOKS_RECOMMENDED, BOOKS_POPULAR, BOOKS_ID} from '../types';
import {setLoading} from './globalAction';

export const saveBookPopular = data => ({
  type: BOOKS_POPULAR,
  payload: data,
});

export const saveBookRecommended = data => ({
  type: BOOKS_RECOMMENDED,
  payload: data,
});

export const saveBookId = data => ({
  type: BOOKS_ID,
  payload: data,
});

export const getDataBooksRecommended = (token, limit) => async dispatch => {
  dispatch(setLoading(true));
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

export const getDataBooksPopular = token => async dispatch => {
  dispatch(setLoading(true));
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
    dispatch(setLoading(false));
  }
};

// GET_BOOKS_API_BY_ID
export const getDataBooksId = (token, id) => async dispatch => {
  dispatch(setLoading(true));
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
    dispatch(setLoading(false));
  }
};
