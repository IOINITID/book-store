import React from 'react';
import './menu-item.scss';
import FavoriteIcon from '../../assets/images/favorite-icon.svg';
import CartIcon from '../../assets/images/cart-icon.svg';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../utils/constants';

interface IMenuItem {
  type: string;
  quantity: number;
}

const MenuItem = (props: IMenuItem) => {
  const { type, quantity } = props;

  return (
    <Link to={type === 'favorite' ? RoutePath.MAIN_PAGE : RoutePath.CART_PAGE} className="menu-item">
      <span className="menu-item__quantity">{quantity}</span>
      {type && type === 'favorite' ? <FavoriteIcon width="18" height="16" /> : <CartIcon width="14" height="16" />}
    </Link>
  );
};

export default MenuItem;
