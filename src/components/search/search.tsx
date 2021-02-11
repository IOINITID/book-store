import React from 'react';
import './search.scss';
import SearchIcon from '../../assets/images/search-icon.svg';
import { connect } from 'react-redux';
import { onSearchChangeAction } from '../../actions';

const Search = (props: { onSearchChange: (searchValue) => void; booksData: []; searchValue: string }) => {
  const { onSearchChange, booksData, searchValue } = props;
  const onInputChange = (evt) => {
    onSearchChange(evt.target.value);
  };

  const onSearch = (itemsData, searchValue) => {
    if (itemsData.length && searchValue) {
      return itemsData.filter((item) => item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
    }

    return [];
  };

  const searchListData = onSearch(booksData, searchValue);

  const searchList = searchListData.length ? (
    <ul className="search__list">
      {searchListData.map((book, index) => {
        return (
          <li className="search__item" key={book.title + index}>
            <p className="search__item-title">{book.title}</p>
            <p className="search__item-author">{book.author}</p>
          </li>
        );
      })}
    </ul>
  ) : null;

  return (
    <form className="search" action="#">
      <label className="search__label" htmlFor="">
        <input
          className={`search__input ${searchListData.length ? 'search__input--active' : null}`}
          type="search"
          placeholder="Искать книгу"
          onChange={onInputChange}
        />
        <SearchIcon className="search__icon" />
        {searchList}
      </label>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    booksData: state.books,
    searchValue: state.searchValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (searchValue) => dispatch(onSearchChangeAction(searchValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
