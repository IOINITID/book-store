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
}

interface IBooksState {
  books: IBook[];
}

interface ILoadBooksAction {
  type: ActionTypes.LOAD_BOOKS;
  payload: IBook[];
}

const initialState = {
  books: [],
};

const booksReducer = (state: IBooksState = initialState, action: ILoadBooksAction): IBooksState => {
  switch (action.type) {
    case ActionTypes.LOAD_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default booksReducer;
