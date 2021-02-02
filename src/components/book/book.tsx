import React from 'react';
import styles from './book.scss';
import CartIcon from '../../assets/images/cart-icon.svg';
import BookCover from '../book-cover/book-cover';

interface IBookCover {
  title: string;
  image: string;
  rating: number;
}

interface IBook {
  book: {
    title: string;
    author: string;
    publishing: string;
    release: number;
    pages: number;
    cover: string;
    limitation: number;
    image: string;
    rating: number;
    price: number;
    genres: string[];
    description: string;
  };
}

const Book = (props: IBook) => {
  const {
    book: { title, author, publishing, release, pages, cover, limitation, image, rating, price, genres, description },
  } = props;

  const genresItems = genres.map((item, index) => {
    return (
      <li className={styles['genre-item']} key={item + index}>
        <span className={styles['genre']}>{item}</span>
      </li>
    );
  });

  const bookCover: IBookCover = { title, image, rating };

  return (
    <div className={styles['book']}>
      <BookCover bookCover={bookCover} />
      <div className={styles['info']}>
        <h3 className={styles['title']}>{title}</h3>
        <p className={styles['author']}>{author}</p>
        <ul className={styles['genre-list']}>{genresItems}</ul>
        <div className={styles['cart']}>
          <span className={styles['price']}>{price} ₽</span>
          <button className={styles['button-buy']} type="button" title="Добавить в корзину">
            <CartIcon width="12" height="13" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
