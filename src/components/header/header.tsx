import React from 'react';
import './header.scss';
import FavoriteIcon from '../../assets/images/favorite-icon.svg';
import CartIcon from '../../assets/images/cart-icon.svg';
import Logo from '../logo/logo';
import Search from '../search/search';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Search />
        <div className="favorite__wrapper">
          <div className="favorite">
            <span className="favorite__quantity">6</span>
            <FavoriteIcon />
          </div>
        </div>
        <div className="cart__wrapper">
          <div className="header__cart">
            <span className="header__cart-quantity">6</span>
            <CartIcon width="14" height="16" />
          </div>
          <span className="cart__price">1 116 ₽</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
