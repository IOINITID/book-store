import React from 'react';
import './book-info.scss';
import CartIcon from '../../assets/images/cart-icon.svg';
import { getColorByGenre } from '../../utils/common';
import { IBookInfo } from '../../interfaces';
import { connect } from 'react-redux';
import { addToCartAction } from '../../actions';

const BookInfo = (props: { bookInfo: IBookInfo; addToCart: (id) => void }) => {
  const {
    bookInfo: { id, title, author, price, genres },
    addToCart,
  } = props;

  const genresItems = genres.map((item, index) => {
    const background = getColorByGenre(item);
    return (
      <li className="genre-item" key={item + index}>
        <span className="genre" style={{ backgroundColor: background }}>
          {item}
        </span>
      </li>
    );
  });

  const onButtonClick = (evt) => {
    evt.stopPropagation();
    addToCart(id);
  };

  return (
    <div className="info">
      <h3 className="title">{title}</h3>
      <p className="author">{author}</p>
      <ul className="genre-list">{genresItems}</ul>
      <span className="price">{price.toLocaleString()} ₽</span>
      <button className="button-buy" type="button" title="Добавить в корзину" onClick={onButtonClick}>
        <CartIcon width="11" height="13" />
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCartAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(BookInfo);
