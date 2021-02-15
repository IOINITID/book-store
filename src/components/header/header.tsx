import React from 'react';
import './header.scss';
import Logo from '../logo/logo';
import Search from '../search/search';
import MenuList from '../menu-list/menu-list';
import { connect } from 'react-redux';
import { onSearchChangeAction } from '../../actions';

const Header = ({ isSearching, onSearchChange }: { isSearching: boolean; onSearchChange: (searchData) => void }) => {
  const isMobile = window.matchMedia('(max-width: 1343px)').matches;

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Search />
        {isSearching && isMobile ? (
          <a href="#ref" className="header__close" onClick={() => onSearchChange('')}>
            Отменить
          </a>
        ) : (
          <MenuList />
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isSearching: state.isSearching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (searchData) => dispatch(onSearchChangeAction(searchData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
