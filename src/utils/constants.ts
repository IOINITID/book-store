enum ActionTypes {
  LOAD_BOOKS = 'LOAD_BOOKS',
  SHOW_MODAL = 'SHOW_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  ADD_TO_FAVORITE = 'ADD_TO_FAVORITE',
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

const booksUrl = 'https://raw.githubusercontent.com/IOINITID/book-store/master/src/assets/api/books.json';

export { ActionTypes, booksUrl };
