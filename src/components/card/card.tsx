import React from 'react';
import styles from './card.scss';
import CartIcon from '../../assets/images/cart-icon.svg';
import RatingIcon from '../../assets/images/rating-icon.svg';

const Card = () => {
  return (
    <div className={styles['card']}>
      <div className={styles['cover']}>
        <img
          className={styles['image']}
          src="images/twilight@1x.jpg"
          srcSet="images/twilight@1x.jpg 1x, images/twilight@2x.jpg 2x"
          width="136"
          height="160"
          loading="lazy"
          alt="Twilight."
        />
        <div className={styles['rating']}>
          <RatingIcon width="8" height="8" />
          <span className={styles['rating-item']}>4.8</span>
        </div>
      </div>
      <div className={styles['info']}>
        <h3 className={styles['title']}>Сумерки</h3>
        <p className={styles['author']}>Стефани Майер</p>
        <ul className={styles['genre-list']}>
          <li className={styles['genre-item']}>
            <span className={styles['genre']}>Романтика</span>
          </li>
          <li className={styles['genre-item']}>
            <span className={styles['genre']} style={{ backgroundColor: '#495590' }}>
              Мистика
            </span>
          </li>
        </ul>
        <div className={styles['cart']}>
          <span className={styles['price']}>413 ₽</span>
          <button className={styles['button-buy']} type="button" title="Добавить в корзину">
            <CartIcon width="12" height="13" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
