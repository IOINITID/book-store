import React from 'react';
import styles from './book-rating.module.scss';
import RatingIcon from '../../assets/images/rating-icon.svg';
import { IBookRating } from '../../interfaces';

const BookRating = (props: IBookRating) => {
  const { rating } = props;

  return (
    <div className={styles.rating}>
      <RatingIcon className={styles.icon} width="8" height="8" />
      <span className={styles.value}>{rating.toFixed(1)}</span>
    </div>
  );
};

export default BookRating;
