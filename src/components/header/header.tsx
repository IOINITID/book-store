import React from 'react';
import './header.scss';
import Logo from '../logo/logo';
import Search from '../search/search';
import Action from '../action/action';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Search />
        <Action type="favorite" quantity={8} />
        <Action type="cart" quantity={8} price={1116} />
      </div>
    </header>
  );
};

export default Header;
