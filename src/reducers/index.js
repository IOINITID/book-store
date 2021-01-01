import updateBookList from './book-list.js';
import updateShoppingCart from './shopping-cart.js';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
