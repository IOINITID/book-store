import { ActionTypes } from './types';

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

const deleteFromCartAction = (id, books) => {
  return {
    type: ActionTypes.DELETE_FROM_CART,
    payload: { id, books },
  };
};

export { addToCartAction, removeFromCartAction, deleteFromCartAction };
