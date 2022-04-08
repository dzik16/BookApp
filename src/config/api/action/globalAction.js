import {LOADING} from '../types';

export const setLoading = value => ({
  type: LOADING,
  payload: value,
});
