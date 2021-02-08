import React from 'react';
import './action.scss';
import FavoriteIcon from '../../assets/images/favorite-icon.svg';
import CartIcon from '../../assets/images/cart-icon.svg';

interface IAction {
  quantity: number;
  price?: number;
  type: string;
}

const Action = (props: IAction) => {
  const { type, quantity, price } = props;

  return (
    <div className="action">
      <div className="action__container">
        <span className="action__quantity">{quantity}</span>
        {type && type === 'favorite' ? <FavoriteIcon width="18" height="16" /> : <CartIcon width="14" height="16" />}
      </div>
      {price ? <span className="action__price">{price.toLocaleString()} ₽</span> : null}
    </div>
  );
};

export default Action;
