import React from 'react';
import './header.scss';
import LogoIcon from '../../assets/images/logo-icon.svg';
import SearchIcon from '../../assets/images/search-icon.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo" href="#ref">
          <LogoIcon className="header__logo-icon" />
        </a>
        <form className="form" action="#">
          <label className="form__label" htmlFor="">
            <input className="form__search" type="search" placeholder="Искать книгу" />
            <SearchIcon className="form__search-icon" />
          </label>
        </form>
      </div>
    </header>
  );
};

export default Header;
