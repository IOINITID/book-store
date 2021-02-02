import React, { useEffect, useState } from 'react';
import Book from '../book/book';
import styles from './book-list.scss';
import { booksUrl } from '../../utils/constants';

const BookList = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch(booksUrl)
      .then((response) => response.json())
      .then((result) => setBooksData(result));
  }, []);

  console.log('Список книг:', booksData);

  const books = booksData.map((book) => {
    return (
      <li className={styles['book-item']} key={book.id}>
        <Book book={book} />
      </li>
    );
  });

  return <ul className={styles['book-list']}>{books}</ul>;
};

export default BookList;
