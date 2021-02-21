import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { RoutePaths } from '../../routes';
import Header from '../header/header';
import MainPage from '../../pages/main/main';
import CartPage from '../../pages/cart/cart';
import Modal from '../modal/modal';

interface IBook {
  id: string;
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
}

interface IApp {
  modalData: IBook[];
}

const App = ({ modalData }: IApp) => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={RoutePaths.MAIN_PAGE} component={MainPage} exact />
        <Route path={RoutePaths.CART_PAGE} component={CartPage} exact />
      </Switch>
      {modalData && <Modal />}
    </HashRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    modalData: state.modal.modalData,
  };
};

export default connect(mapStateToProps, null)(App);
