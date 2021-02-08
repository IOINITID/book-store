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
    case ActionTypes.ADD_TO_FAVORITE:
      return {
        ...state,
        books: state.books.slice().map((book) => {
          if (book.id === action.payload) {
            book.favorite = !book.favorite;
          }
          return { ...book };
        }),
      };
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        books: state.books.slice().map((book) => {
          if (book.id === action.payload) {
            book.cart = true;
          }
          return { ...book };
        }),
      };
    default:
      return state;
  }
};

export default reducer;
