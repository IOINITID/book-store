const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1)
    ];
  }

  if (index === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1)
  ];
};

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: {
      books
    },
    shoppingCart: {
      cartItems
    }
  } = state;
  const book = books.find((item) => item.id === bookId);
  const itemIndex = cartItems.findIndex((item) => item.id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);

  return {
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
    orderTotal: 0
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    };
  }

  switch (action.type) {
    case `BOOK_REMOVED_FROM_CART`:
      return updateOrder(state, action.payload, -1);
    case `BOOK_ADDED_TO_CART`:
      return updateOrder(state, action.payload, 1);
    case `ALL_BOOKS_REMOVED_FROM_CART`:
      const cartItem = state.shoppingCart.cartItems.find((item) => item.id === action.payload);
      return updateOrder(state, action.payload, -cartItem.count);
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
