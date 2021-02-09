import React, { Fragment } from 'react';
import Banner from '../../components/banner/banner';
import BookList from '../../components/book-list/book-list';

const MainPage = () => {
  return (
    <Fragment>
      <Banner />
      <div className="container">
        <div className="app__container">
          <h2 className="app__title">Бестселлеры</h2>
        </div>
        <BookList />
      </div>
    </Fragment>
  );
};

export default MainPage;
