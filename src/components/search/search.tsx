import React from 'react';
import './search.scss';
import SearchIcon from '../../assets/images/search-icon.svg';

const Search = () => {
  return (
    <form className="search" action="#">
      <label className="search__label" htmlFor="">
        <input className="search__input" type="search" placeholder="Искать книгу" />
        <SearchIcon className="search__icon" />
      </label>
    </form>
  );
};

export default Search;
