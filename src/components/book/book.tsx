import React from 'react';
import './book.scss';
import BookCover from '../book-cover/book-cover';
import BookInfo from '../book-info/book-info';
import { IBook } from '../../interfaces';

const Book = (props: { book: IBook }) => {
  const {
    book: { id, title, author, publisher, release, pages, cover, age, image, rating, price, genres, description },
  } = props;

  return (
    <div className="book">
      <BookCover title={title} image={image} rating={rating} />
      <BookInfo bookInfo={{ title, author, price, genres }} />
    </div>
  );
};

export default Book;
