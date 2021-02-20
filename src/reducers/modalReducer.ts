import { ActionTypes } from '../utils/constants';

const defaultState = {
  modalData: null,
};

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        ...state,
        modalData: action.payload.books.find((book) => book.id === action.payload.id),
      };
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalData: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
