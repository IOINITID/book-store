import { ActionTypes } from '../actions/types';

const defaultState = {
  cartBooks: [],
  quantity: 0,
  price: 0,
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const cartBook = action.payload.books
        .map((book) => {
          if (book.id === action.payload.id && !book.quantity) {
            book.quantity = 1;
            book.totalPrice = book.price * book.quantity;
            return book;
          }

          if (book.id === action.payload.id && book.quantity) {
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
        quantity: cartQuantity,
        price: cartTotalPrice,
      };
    case ActionTypes.REMOVE_FROM_CART:
      // eslint-disable-next-line no-case-declarations
      const cartBookData = action.payload.books
        .map((book) => {
          if (book.id === action.payload.id && !book.quantity) {
            book.quantity = 1;
            book.totalPrice = book.price * book.quantity;
            return book;
          }

          if (book.id === action.payload.id && book.quantity > 1) {
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

export default cartReducer;
