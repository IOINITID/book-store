import { ActionTypes } from '../utils/constants';

const defaultState = {
  quantity: 0,
};

const favoritesReducer = (state = defaultState, action) => {
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
