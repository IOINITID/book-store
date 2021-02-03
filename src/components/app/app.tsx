import React from 'react';
import BookList from '../book-list/book-list';
import Header from '../header/header';
import './app.scss';

const App = () => {
  return (
    <div className="">
      <Header />
      <div className="container">
        <BookList />
      </div>
    </div>
  );
};

export default App;
