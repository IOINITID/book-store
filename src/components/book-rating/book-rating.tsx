import React from 'react';
// import './book-rating.scss';
import RatingIcon from '../../assets/images/rating-icon.svg';
import { IBookRating } from '../../interfaces';
import styled from 'styled-components';

const Rating = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 4px;
  padding: 4px 11px;
  background: #f5f5f5;
  border-radius: 0 0 0 8px;
`;

const RatingItem = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #5e5e5e;
`;

const BookRating = (props: IBookRating) => {
  const { className, rating } = props;

  return (
    // <div className="rating">
    //   <RatingIcon className="rating-icon" width="8" height="8" />
    //   <span className="rating-item">{rating.toFixed(1)}</span>
    // </div>
    <Rating className={className}>
      <RatingIcon width="8" height="8" />
      <RatingItem>{rating.toFixed(1)}</RatingItem>
    </Rating>
  );
};

export default BookRating;
