import { ActionTypes } from '../utils/constants';

const initialState = {
  books: [],
  isModalOpen: false,
  modalData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_BOOKS:
      return { ...state, books: action.payload };
    case ActionTypes.SHOW_MODAL:
      return {
        ...state,
        modalData: state.books.slice().filter((book) => book.id === action.payload),
        isModalOpen: true,
      };
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalData: null,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
