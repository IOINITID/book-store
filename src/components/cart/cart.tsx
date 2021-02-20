import React, { Fragment } from 'react';
import './cart.scss';
import { connect } from 'react-redux';
import { addToCartAction, removeFromCartAction } from '../../actions';
import { IBook } from '../../interfaces';
import DeleteIcon from '../../assets/images/delete-icon.svg';
import MinusIcon from '../../assets/images/minus-icon.svg';
import PlusIcon from '../../assets/images/plus-icon.svg';

const Cart = (props: {
  cartBooks: IBook[];
  addToCart: (id) => void;
  removeFromCart: (id) => void;
  cartTotalPrice: number;
}) => {
  const { cartBooks, addToCart, removeFromCart, cartTotalPrice } = props;

  return (
    <div className="cart__page">
      <h2 className="cart__page-title">{cartBooks.length ? 'Корзина' : 'Ваша корзина пуста'}</h2>
      <ul>
        {cartBooks.map((book, index) => {
          return (
            <li key={book.title + index}>
              <span className="cart__id">{index + 1}</span>
              <img className="cart__image" src={`images/${book.image}-1.jpg`} width="136" height="160" alt="" />
              <p className="cart__title">{book.title}</p>
              <p className="cart__author">{book.author}</p>
              <div className="cart__controls">
                <button className="cart__button" type="button" onClick={() => removeFromCart(book.id)}>
                  <MinusIcon />
                </button>
                <span className="cart__quantity">{book.quantity}</span>
                <button className="cart__button" type="button" onClick={() => addToCart(book.id)}>
                  <PlusIcon />
                </button>
              </div>
              <p className="cart__price">{book.price} ₽</p>
              <button className="cart__remove" type="button">
                <DeleteIcon />
              </button>
            </li>
          );
        })}
      </ul>
      {cartBooks.length ? (
        <Fragment>
          <span className="cart__total-title">Итого</span>
          <span className="cart__total-value">{cartTotalPrice.toLocaleString()} ₽</span>
        </Fragment>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartBooks: state.default.cartBooks,
    cartTotalPrice: state.default.cartTotalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCartAction(id)),
    removeFromCart: (id) => dispatch(removeFromCartAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
