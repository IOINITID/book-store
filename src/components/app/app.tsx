import React from 'react';
import Banner from '../banner/banner';
import BookList from '../book-list/book-list';
import Header from '../header/header';
import './app.scss';

const App = () => {
  return (
    <div className="">
      {/* <Header /> */}
      <Banner />
      <div className="container">
        <div className="app__container">
          <h2 className="app__title">Бестселлеры</h2>
        </div>
        <BookList />
      </div>
    </div>
  );
};

export default App;
