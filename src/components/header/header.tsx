import React from 'react';
import './header.scss';
import Logo from '../logo/logo';
import Search from '../search/search';
import Action from '../action/action';
import { connect } from 'react-redux';
import { IBook } from '../../interfaces';

interface IHeader {
  books: IBook[];
}

const Header = (props: IHeader) => {
  const { books } = props;
  const favoriteQuantity = books.filter((book) => book.favorite).length;

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Search />
        <Action type="favorite" quantity={favoriteQuantity} />
        <Action type="cart" quantity={8} price={1116} />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps, null)(Header);
