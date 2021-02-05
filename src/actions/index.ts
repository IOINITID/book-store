import { ActionTypes } from '../utils/constants';

const loadBooksAction = (books) => {
  return {
    type: ActionTypes.LOAD_BOOKS,
    payload: books,
  };
};

const showModalAction = (id) => {
  return {
    type: ActionTypes.SHOW_MODAL,
    payload: id,
  };
};

const closeModalAction = () => {
  return {
    type: ActionTypes.CLOSE_MODAL,
  };
};

export { ActionTypes, loadBooksAction, showModalAction, closeModalAction };
