import React from 'react';
import './app.scss';
import Banner from '../banner/banner';
import BookList from '../book-list/book-list';
import Header from '../header/header';
import Modal from '../modal/modal';
import { connect } from 'react-redux';
import {} from '../../interfaces';

interface IApp {
  isModalOpen: boolean;
}

const App = (props: IApp) => {
  const { isModalOpen } = props;

  return (
    <div className="">
      <Header />
      <Banner />
      <div className="container">
        <div className="app__container">
          <h2 className="app__title">Бестселлеры</h2>
        </div>
        <BookList />
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.isModalOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // modalData: () => dispatch(dsadas()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
