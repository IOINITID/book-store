import React from 'react';
import styles from './book-cover.scss';
import BookRating from '../book-rating/book-rating';
import { IBookCover } from '../../interfaces/index';

const BookCover = (props: IBookCover) => {
  const {
    bookCover: { title, image, rating },
  } = props;

  return (
    <div className={styles['cover']}>
      <img
        className={styles['image']}
        src={`images/${image}.jpg`}
        width="136"
        height="160"
        loading="lazy"
        alt={`Обложка книги ${title}.`}
      />
      <BookRating rating={rating} />
    </div>
  );
};

export default BookCover;
