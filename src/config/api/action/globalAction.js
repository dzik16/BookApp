import {LOADING, REFRESH} from '../types';

export const setLoading = value => ({
  type: LOADING,
  payload: value,
});

export const setRefresh = value => ({
  type: REFRESH,
  payload: value,
});
