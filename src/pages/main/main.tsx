import React from 'react';
import './main.scss';
import Banner from '../../components/banner/banner';
import BookList from '../../components/book-list/book-list';

const MainPage = () => {
  return (
    <main className="main">
      <Banner />
      <div className="container">
        <div className="app__container">
          <h2 className="app__title">Бестселлеры</h2>
        </div>
        <BookList />
      </div>
    </main>
  );
};

export default MainPage;
