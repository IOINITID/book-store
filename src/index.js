import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app.jsx';
import ErrorBoundry from './components/error-boundry/error-boundry.jsx';
import BookstoreService from './services/bookstore-service.js';
import {BookstoreServiceProvider} from './components/bookstore-service-context/bookstore-service-context.jsx';
import store from './store.js';

const bookstoreService = new BookstoreService();

const Root = () => {
  return (
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreService}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.querySelector(`#root`));
