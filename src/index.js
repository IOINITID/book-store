import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./components/app/app";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstore-service-context/bookstore-service-context";
import store from "./store";

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

ReactDOM.render(<Root />, document.querySelector(`.root`));
