import { ActionTypes } from '../utils/constants';

const loadBooksAction = (books) => {
  return {
    type: ActionTypes.LOAD_BOOKS,
    payload: books,
  };
};

const showModalAction = (id, books) => {
  return {
    type: ActionTypes.SHOW_MODAL,
    payload: { id, books },
  };
};

const closeModalAction = () => {
  return {
    type: ActionTypes.CLOSE_MODAL,
  };
};

const toggleFavoriteAction = (id, books) => {
  return {
    type: ActionTypes.TOGGLE_FAVORITE,
    payload: { id, books },
  };
};

const addToCartAction = (id, books) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { id, books },
  };
};

const removeFromCartAction = (id, books) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { id, books },
  };
};

const searchChangeAction = (searchValue = '') => {
  return {
    type: ActionTypes.SEARCH_CHANGE,
    payload: searchValue,
  };
};

export {
  ActionTypes,
  loadBooksAction,
  showModalAction,
  closeModalAction,
  toggleFavoriteAction,
  addToCartAction,
  removeFromCartAction,
  searchChangeAction,
};
