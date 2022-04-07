import {
  REGISTER,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN,
  LOGIN_LOADING,
  LOGOUT,
} from '../types';

const initialAuthState = {
  token: null,
  name: '',
  isRegSukses: true,
  isLoading: false,
};

export const authReducers = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
        name: action.name,
        isLoading: false,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case REGISTER:
      return {
        ...state,
        isRegSukses: true,
        isLoading: false,
      };

    case REGISTER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegSukses: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
