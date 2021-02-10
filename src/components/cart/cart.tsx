import React from 'react';
import './cart.scss';
import { connect } from 'react-redux';
import { addToCartAction, removeFromCartAction } from '../../actions';
import { IBook } from '../../interfaces';

const Cart = (props: { cartBooks: IBook[]; addToCart: (id) => void; removeFromCart: (id) => void }) => {
  const { cartBooks, addToCart, removeFromCart } = props;

  return (
    <div className="cart__page">
      <h2>Корзина</h2>
      <ul>
        {cartBooks.map((book, index) => {
          return (
            <li key={book.title + index}>
              <span className="cart__id">{index + 1}</span>
              <img className="cart__image" src={`images/${book.image}-1.jpg`} width="136" height="160" alt="" />
              <p className="cart__title">{book.title}</p>
              <p className="cart__author">{book.author}</p>
              <div className="cart__quantity">
                <button className="cart__button" type="button" onClick={() => removeFromCart(book.id)}>
                  -
                </button>
                <span>{book.quantity}</span>
                <button className="cart__button" type="button" onClick={() => addToCart(book.id)}>
                  +
                </button>
              </div>
              <p className="cart__price">{book.price} ₽</p>
              <button className="cart__remove" type="button">
                -
              </button>
            </li>
          );
        })}
      </ul>
      <span>Итого</span>
      <span>1 116 ₽</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartBooks: state.cartBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCartAction(id)),
    removeFromCart: (id) => dispatch(removeFromCartAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
