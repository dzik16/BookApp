import {LOADING} from '../types';

const initialGlobalState = {
  isLoading: false,
};

export const globalReducers = (state = initialGlobalState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
