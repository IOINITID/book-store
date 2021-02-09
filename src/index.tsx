import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import App from './components/app/app';
import './assets/styles/styles.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/cart/cart';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.querySelector('.root'));
