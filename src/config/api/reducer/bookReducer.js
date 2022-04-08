import {GET_BOOKS_RECOMMENDED, GET_BOOKS_POPULAR, GET_BOOKS_ID} from '../types';

const initialBookState = {
  booksRecommended: [],
  booksPopular: [],
  booksId: [],
};

export const dataReducers = (state = initialBookState, action) => {
  switch (action.type) {
    case GET_BOOKS_RECOMMENDED:
      return {
        ...state,
        booksRecommended: action.payload,
        // isRefreshing: false,
      };
    case GET_BOOKS_POPULAR:
      return {
        ...state,
        booksPopular: action.payload,
        // isLoading: false,
        // isRefreshing: false,
      };
    case GET_BOOKS_ID:
      return {
        ...state,
        booksId: action.payload,
        // isLoading: false,
        // isRefreshing: false,
      };

    default:
      return state;
  }
};
