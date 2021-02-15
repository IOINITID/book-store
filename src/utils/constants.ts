enum ActionTypes {
  LOAD_BOOKS = 'LOAD_BOOKS',
  SHOW_MODAL = 'SHOW_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  SEARCH_CHANGE = 'SEARCH_CHANGE',
}

const Mode = process.env.NODE_ENV;
const MainPage = Mode === 'development' ? '/' : '/';
const MainPageIndex = Mode === 'development' ? '/index.html' : '/index.html';
const CartPage = Mode === 'development' ? '/cart' : '/cart';

const RoutePath = {
  MAIN_PAGE: MainPage,
  MAIN_PAGE_INDEX: MainPageIndex,
  CART_PAGE: CartPage,
};

const booksUrl = 'https://raw.githubusercontent.com/IOINITID/book-store/master/src/assets/api/books.json';

export { ActionTypes, booksUrl, RoutePath };
