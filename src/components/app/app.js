import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import ShopHeader from '../shop-header/shop-header';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Switch>
        <Route
          path="/book-store"
          component={HomePage}
          exact
        />
        <Route
          path="/book-store/index.html"
          component={HomePage}
          exact
        />
        <Route
          path="/cart"
          component={CartPage}
        />
      </Switch>
    </main>
  );
};

export default App;
