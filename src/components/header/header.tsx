import React from 'react';
import './header.scss';
import Logo from '../logo/logo';
import Search from '../search/search';
import Action from '../action/action';
import { connect } from 'react-redux';
import { IBook } from '../../interfaces';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../utils/constants';

interface IHeader {
  books: IBook[];
  cartTotalPrice: number;
  cartQuantity: number;
  cartFavorite: number;
}

const Header = (props: IHeader) => {
  const { cartTotalPrice, cartQuantity, cartFavorite } = props;

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Search />
        <Action type="favorite" quantity={cartFavorite} />
        <Link to={RoutePath.CART_PAGE}>
          <Action type="cart" quantity={cartQuantity} price={cartTotalPrice} />
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
    cartTotalPrice: state.cartTotalPrice,
    cartQuantity: state.cartQuantity,
    cartFavorite: state.cartFavorite,
  };
};

export default connect(mapStateToProps, null)(Header);
