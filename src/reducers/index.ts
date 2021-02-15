import { ActionTypes } from '../utils/constants';

const initialState = {
  books: [],
  isModalOpen: false,
  modalData: null,
  cartBooks: [],
  favoriteQuantity: 0,
  cartQuantity: 0,
  cartTotalPrice: 0,
  searchValue: '',
  isSearching: false,
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
        searchValue: '',
      };
    case ActionTypes.SEARCH_CHANGE:
      return { ...state, searchValue: action.payload, isSearching: action.payload ? true : false };
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalData: null,
        isModalOpen: false,
      };
    case ActionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        books: state.books.slice().map((book) => {
          if (book.id === action.payload) {
            book.favorite = !book.favorite;
          }
          return { ...book };
        }),
        favoriteQuantity: state.books.slice().filter((book) => book.favorite).length,
      };
    case ActionTypes.ADD_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const cartBook = state.books
        .slice()
        .map((book) => {
          if (book.id === action.payload && !book.quantity) {
            book.quantity = 1;
            book.totalPrice = book.price * book.quantity;
            return book;
          }

          if (book.id === action.payload && book.quantity) {
            book.quantity += 1;
            book.totalPrice = book.price * book.quantity;
            return book;
          }
        })
        .filter((book) => book);

      // eslint-disable-next-line no-case-declarations
      const cartTotalPrice = [...Array.from(new Set([...state.cartBooks, ...cartBook]))]
        .slice()
        .map((book) => book.totalPrice)
        .filter((book) => book)
        .reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
        }, 0);

      // eslint-disable-next-line no-case-declarations
      const cartQuantity = [...Array.from(new Set([...state.cartBooks, ...cartBook]))]
        .slice()
        .map((book) => book.quantity)
        .filter((book) => book)
        .reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
        }, 0);

      return {
        ...state,
        cartBooks: [...Array.from(new Set([...state.cartBooks, ...cartBook]))],
        cartTotalPrice: cartTotalPrice,
        cartQuantity: cartQuantity,
      };
    case ActionTypes.REMOVE_FROM_CART:
      // eslint-disable-next-line no-case-declarations
      const cartBookData = state.books
        .slice()
        .map((book) => {
          if (book.id === action.payload && !book.quantity) {
            book.quantity = 1;
            book.totalPrice = book.price * book.quantity;
            return book;
          }

          if (book.id === action.payload && book.quantity > 1) {
            book.quantity -= 1;
            book.totalPrice = book.price * book.quantity;
            return book;
          }
        })
        .filter((book) => book);

      return {
        ...state,
        cartBooks: [...Array.from(new Set([...state.cartBooks, ...cartBookData]))],
      };
    default:
      return state;
  }
};

export default reducer;
