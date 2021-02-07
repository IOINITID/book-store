import React from 'react';
import './book-cover.scss';
import BookRating from '../book-rating/book-rating';
import { IBookCover } from '../../interfaces';

const BookCover = (props: IBookCover) => {
  const { title, image, rating } = props;

  return (
    <div className="cover">
      <img
        className="cover__image"
        src={`images/${image}-1.jpg`}
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
