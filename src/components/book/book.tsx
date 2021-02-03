import React from 'react';
import './book.scss';
import BookCover from '../book-cover/book-cover';
import BookInfo from '../book-info/book-info';
import { IBook } from '../../interfaces/index';

const Book = (props: IBook) => {
  const {
    book: { title, author, publisher, release, pages, cover, age, image, rating, price, genres, description },
  } = props;

  return (
    <div className="book">
      <BookCover bookCover={{ title, image, rating }} />
      <BookInfo bookInfo={{ title, author, price, genres }} />
    </div>
  );
};

export default Book;
