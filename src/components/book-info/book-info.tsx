import React from 'react';
import './book-info.scss';
import CartIcon from '../../assets/images/cart-icon.svg';
import { getColorByGenre } from '../../utils/common';
import { IBookInfo } from '../../interfaces';

const BookInfo = (props: IBookInfo) => {
  const {
    bookInfo: { title, author, price, genres },
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

  return (
    <div className="info">
      <h3 className="title">{title}</h3>
      <p className="author">{author}</p>
      <ul className="genre-list">{genresItems}</ul>
      <div className="cart">
        <span className="price">{price.toLocaleString()} ₽</span>
        <button className="button-buy" type="button" title="Добавить в корзину">
          <CartIcon width="12" height="13" />
        </button>
      </div>
    </div>
  );
};

export default BookInfo;
