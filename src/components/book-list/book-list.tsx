import React, { useEffect, useState } from 'react';
import Book from '../book/book';

const BookList = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/IOINITID/book-store/master/src/assets/api/books.json')
      .then((response) => response.json())
      .then((result) => setBooksData(result));
  }, []);

  console.log(booksData);

  const books = booksData.map((book) => {
    return (
      <li className="" key={book.id}>
        <Book book={book} />
      </li>
    );
  });

  return <ul>{books}</ul>;
};

export default BookList;
