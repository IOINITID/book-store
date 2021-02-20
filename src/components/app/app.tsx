import React from 'react';
import './app.scss';
import Modal from '../modal/modal';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/main/main';
import CartPage from '../../pages/cart/cart';
import Header from '../header/header';
import { RoutePath } from '../../utils/constants';
// import { IApp } from '../../interfaces';

interface IApp {
  modalData: boolean;
}

const App = (props: IApp) => {
  const { modalData } = props;

  return (
    <HashRouter>
      <Header />
      <main className="main">
        <Switch>
          <Route path={RoutePath.MAIN_PAGE} component={MainPage} exact />
          <Route path={RoutePath.MAIN_PAGE_INDEX} component={MainPage} exact />
          <Route path={RoutePath.CART_PAGE} component={CartPage} exact />
        </Switch>
      </main>
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
