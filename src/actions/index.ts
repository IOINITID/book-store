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

const toggleFavoriteAction = (id) => {
  return {
    type: ActionTypes.TOGGLE_FAVORITE,
    payload: id,
  };
};

const addToCartAction = (id) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: id,
  };
};

const removeFromCartAction = (id) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: id,
  };
};

const onSearchChangeAction = (searchData = ``) => {
  return {
    type: ActionTypes.SEARCH_CHANGE,
    payload: searchData,
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
  onSearchChangeAction,
};
