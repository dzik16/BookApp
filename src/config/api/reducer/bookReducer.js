import {BOOKS_RECOMMENDED, BOOKS_POPULAR, BOOKS_ID} from '../types';

const initialBookState = {
  booksRecommended: [],
  booksPopular: [],
  booksId: [],
};

export const dataReducers = (state = initialBookState, action) => {
  switch (action.type) {
    case BOOKS_RECOMMENDED:
      return {
        ...state,
        booksRecommended: action.payload,
        // isRefreshing: false,
      };
    case BOOKS_POPULAR:
      return {
        ...state,
        booksPopular: action.payload,
        // isLoading: false,
        // isRefreshing: false,
      };
    case BOOKS_ID:
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
