import React from 'react';
import './app.scss';
import Modal from '../modal/modal';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/main/main';
import CartPage from '../../pages/cart/cart';
import Header from '../header/header';

interface IApp {
  isModalOpen: boolean;
}

const App = (props: IApp) => {
  const { isModalOpen } = props;

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/book-store" component={MainPage} exact />
        <Route path="/book-store/index.html" component={MainPage} exact />
        <Route path="/book-store/cart" component={CartPage} />
      </Switch>
      {isModalOpen && <Modal />}
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.isModalOpen,
  };
};

export default connect(mapStateToProps, null)(App);
