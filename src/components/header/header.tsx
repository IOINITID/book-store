import React from 'react';
import './header.scss';
import Logo from '../logo/logo';
import Search from '../search/search';
import MenuList from '../menu-list/menu-list';
import { connect } from 'react-redux';
import { searchChangeAction } from '../../actions';

interface IHeader {
  searchValue: string;
  searchChange: (searchValue) => void;
}

const Header = ({ searchChange, searchValue }: IHeader) => {
  const isMobile = window.matchMedia('(max-width: 703px)').matches;
  const isTablet = window.matchMedia('(max-width: 1343px)').matches;

  return (
    <header className="header">
      <div className="header__container">
        {searchValue && isMobile ? null : <Logo />}
        <Search />
        {searchValue && (isMobile || isTablet) ? (
          <a href="#ref" className="header__close" onClick={() => searchChange('')}>
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
    searchValue: state.search.searchValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchChange: (searchData) => dispatch(searchChangeAction(searchData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
