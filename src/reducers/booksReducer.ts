import { ActionTypes } from '../actions/types';

const defaultState = {
  books: [],
};

const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default booksReducer;
