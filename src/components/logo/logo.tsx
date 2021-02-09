import React from 'react';
import './logo.scss';
import LogoIcon from '../../assets/images/logo-icon.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className="logo" to="/book-store">
      {/* <LogoIcon className="logo__icon" width="168" height="24" /> */}
      <picture>
        <source media="(min-width: 1344px)" srcSet="images/logo-icon.svg" />
        <source media="(min-width: 704px)" srcSet="images/logo-tablet-icon.svg" />
        <img src="images/logo-mobile-icon.svg" alt="Логотип Book Store." />
      </picture>
    </Link>
  );
};

export default Logo;
