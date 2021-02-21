import { ActionTypes } from './types';

const loadBooksAction = (books) => {
  return {
    type: ActionTypes.LOAD_BOOKS,
    payload: books,
  };
};

export { loadBooksAction };
