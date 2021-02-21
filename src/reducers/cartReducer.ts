import { ActionTypes } from '../actions/types';

interface IBook {
  id: string;
  title: string;
  author: string;
  publisher: string;
  release: number;
  pages: number;
  cover: string;
  age: number;
  image: string;
  rating: number;
  price: number;
  genres: string[];
  description: string;
  favorite?: boolean;
  quantity?: number;
  totalPrice?: number;
}

interface ICartState {
  cartBooks: IBook[];
  quantity: number;
  price: number;
}

interface IAddToCartACtion {
  type: ActionTypes.ADD_TO_CART;
  payload: {
    id: string;
    books: IBook[];
  };
}

interface IRemoveFromCartAction {
  type: ActionTypes.REMOVE_FROM_CART;
  payload: {
    id: string;
    books: IBook[];
  };
}

interface IDeleteFromCartAction {
  type: ActionTypes.DELETE_FROM_CART;
  payload: {
    id: string;
    books: IBook[];
  };
}

type ICartAction = IAddToCartACtion | IRemoveFromCartAction | IDeleteFromCartAction;

const initialState = {
  cartBooks: [],
  quantity: 0,
  price: 0,
};

const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  }

  if (index === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
};

const updateCartItem = (book, item, value) => {
  const {
    id = book.id,
    image = book.image,
    title = book.title,
    author = book.author,
    publisher = book.publisher,
    price = book.price,
    quantity = 0,
    totalPrice = 0,
  } = item;

  return {
    id,
    title,
    image,
    author,
    publisher,
    price,
    quantity: quantity + value,
    totalPrice: totalPrice + value * book.price,
  };
};

const updateOrder = (cartBooks, books, bookId, value) => {
  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartBooks.findIndex((book) => book.id === bookId);
  const item = cartBooks[itemIndex] || {};
  const newItem = updateCartItem(book, item, value);

  return {
    cartBooks: updateCartItems(cartBooks, newItem, itemIndex).filter((book) => book.quantity),
    quantity: updateCartItems(cartBooks, newItem, itemIndex)
      .map((book) => book.quantity)
      .reduce((p, c) => p + c, 0),
    price: updateCartItems(cartBooks, newItem, itemIndex)
      .map((book) => book.totalPrice)
      .reduce((p, c) => p + c, 0),
  };
};

const cartReducer = (state: ICartState = initialState, action: ICartAction): ICartState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        ...updateOrder(state.cartBooks, action.payload.books, action.payload.id, 1),
      };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        ...updateOrder(state.cartBooks, action.payload.books, action.payload.id, -1),
      };
    case ActionTypes.DELETE_FROM_CART:
      return {
        ...state,
        ...updateOrder(
          state.cartBooks,
          action.payload.books,
          action.payload.id,
          -state.cartBooks.find((book) => book.id === action.payload.id).quantity
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
