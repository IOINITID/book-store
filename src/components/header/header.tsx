import React from 'react';
import './header.scss';
import Logo from '../logo/logo';
import Search from '../search/search';
import MenuList from '../menu-list/menu-list';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Search />
        <MenuList />
      </div>
    </header>
  );
};

export default Header;
