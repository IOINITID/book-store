import React from 'react';
import './book-rating.scss';
import RatingIcon from '../../assets/images/rating-icon.svg';
import { IBookRating } from '../../interfaces/index';

const BookRating = (props: IBookRating) => {
  const { rating } = props;

  return (
    <div className="rating">
      <RatingIcon className="rating-icon" width="8" height="8" />
      <span className="rating-item">{rating.toFixed(1)}</span>
    </div>
  );
};

export default BookRating;
