import React from 'react';
import styles from './book-info.scss';
import CartIcon from '../../assets/images/cart-icon.svg';
import { getColorByGenre } from '../../utils/common';

interface IBookInfo {
  bookInfo: {
    title: string;
    author: string;
    price: number;
    genres: string[];
  };
}

const BookInfo = (props: IBookInfo) => {
  const {
    bookInfo: { title, author, price, genres },
  } = props;

  const genresItems = genres.map((item, index) => {
    const background = getColorByGenre(item);

    return (
      <li className={styles['genre-item']} key={item + index}>
        <span className={styles['genre']} style={{ backgroundColor: background }}>
          {item}
        </span>
      </li>
    );
  });

  return (
    <div className={styles['info']}>
      <h3 className={styles['title']}>{title}</h3>
      <p className={styles['author']}>{author}</p>
      <ul className={styles['genre-list']}>{genresItems}</ul>
      <div className={styles['cart']}>
        <span className={styles['price']}>{price.toLocaleString()} ₽</span>
        <button className={styles['button-buy']} type="button" title="Добавить в корзину">
          <CartIcon width="12" height="13" />
        </button>
      </div>
    </div>
  );
};

export default BookInfo;
