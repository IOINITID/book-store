import React from 'react';
import Card from '../card/card';
import styles from './app.scss';

const App = () => {
  return (
    <div className={styles['container']}>
      <Card />
    </div>
  );
};

export default App;
