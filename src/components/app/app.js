import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import ShopHeader from '../shop-header/shop-header';

const result = [
  {
    id: 1011,
    name: `Паназиатская кухня`,
    items: [{
      id: 1012,
      name: `Паназиатская бакалея`,
      parent: 1011
    }]
  }, {
    id: 1012,
    name: `Паназиатская кухня`,
    items: [{
      id: 1012,
      name: `Паназиатская бакалея`,
      parent: 1011
    },
    {
      id: 1012,
      name: `Паназиатская бакалея`,
      parent: 1011
    }]
  }
];

const data = [
  {
    "id": 1011,
    "name": "Паназиатская кухня",
    "parent": 0
  },
  {
    "id": 1012,
    "name": "Паназиатская бакалея",
    "parent": 1011
  },
  {
    "id": 1013,
    "name": "Филе рыбное",
    "parent": 1011
  },
  {
    "id": 1014,
    "name": "Итальянская кухня",
    "parent": 0
  },
  {
    "id": 1015,
    "name": "Замороженные продукты",
    "parent": 0
  },
  {
    "id": 1018,
    "name": "Сыры",
    "parent": 0
  },
  {
    "id": 1019,
    "name": "Мягкие, рассольные, коченные",
    "parent": 1018
  },
  {
    "id": 1020,
    "name": "Плавленные, творожные",
    "parent": 1018
  },
  {
    "id": 1021,
    "name": "С голубой плесенью",
    "parent": 1018
  },
];

// data.forEach((item) => {
//   console.log(item);
// });

const getFilteredData = (data) => {
  let result = [];
  let parentItem = {};

  // Create parent data
  // data.forEach((dataItem) => {
  //   if (dataItem.parent === 0) {
  //     parentItem = dataItem;
  //     result.push(parentItem);
  //   }
  // });

  data.slice().map((dataItem) => {
    if (dataItem.parent === 0) {
      parentItem = dataItem;
      result.push(parentItem);
    }
  });


  result.forEach((resultItem) => {

    data.forEach((item) => {
      if (resultItem.id === item.parent) {
        parentItem.items = [];
        parentItem.items.push(item);
      }
    });

  });


  return result;
};

const filteredData = getFilteredData(data);

console.log(filteredData);

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
