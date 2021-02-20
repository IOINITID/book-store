import { combineReducers } from 'redux';
import searchRedfucer from './searchReducer';
import booksReducer from './booksReducer';
import modalReducer from './modalReducer';
import favoritesReducer from './favoritesReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  search: searchRedfucer,
  books: booksReducer,
  modal: modalReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
});

export { rootReducer };
