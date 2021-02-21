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

interface IFavoriteState {
  quantity: number;
}

interface IToggleFavoriteAction {
  type: ActionTypes.TOGGLE_FAVORITE;
  payload: {
    id: string;
    books: IBook[];
  };
}

const initialState = {
  quantity: 0,
};

const favoritesReducer = (state: IFavoriteState = initialState, action: IToggleFavoriteAction): IFavoriteState => {
  switch (action.type) {
    case ActionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        quantity: action.payload.books
          .map((book) => {
            if (book.id === action.payload.id) {
              book.favorite = !book.favorite;
            }
            return { ...book };
          })
          .filter((book) => book.favorite).length,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
