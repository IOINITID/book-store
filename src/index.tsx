import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import App from './components/app/app';
import './assets/styles/styles.scss';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.querySelector('.root'));
