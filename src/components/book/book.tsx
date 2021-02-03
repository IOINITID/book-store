import React from 'react';
import styles from './book.scss';
import BookCover from '../book-cover/book-cover';
import BookInfo from '../book-info/book-info';

interface IBook {
  book: {
    title: string;
    author: string;
    publisher: string;
    release: number;
    pages: number;
    cover: string;
    age: number;
    image: string;
    rating: number;
    price: number;
    genres: string[];
    description: string;
  };
}

const Book = (props: IBook) => {
  const {
    book: { title, author, publisher, release, pages, cover, age, image, rating, price, genres, description },
  } = props;

  return (
    <div className={styles['book']}>
      <BookCover bookCover={{ title, image, rating }} />
      <BookInfo bookInfo={{ title, author, price, genres }} />
    </div>
  );
};

export default Book;
