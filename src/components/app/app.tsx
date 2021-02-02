import React from 'react';
import BookList from '../book-list/book-list';
import styles from './app.scss';

const App = () => {
  return (
    <div className={styles['container']}>
      <BookList />
    </div>
  );
};

export default App;
