import React from 'react';
import styles from './book-cover.scss';
import RatingIcon from '../../assets/images/rating-icon.svg';

interface IBookCover {
  bookCover: {
    title: string;
    image: string;
    rating: number;
  };
}

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
      <div className={styles['rating']}>
        <RatingIcon className={styles['rating-icon']} width="8" height="8" />
        <span className={styles['rating-item']}>{rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default BookCover;
