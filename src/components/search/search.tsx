import React from 'react';
import './search.scss';
import SearchIcon from '../../assets/images/search-icon.svg';
import { connect } from 'react-redux';
import { onSearchChangeAction, showModalAction } from '../../actions';
import ArrowIcon from '../../assets/images/arrow-icon.svg';

const Search = (props: {
  onSearchChange: (searchValue) => void;
  booksData: [];
  searchValue: string;
  showModal: (id) => void;
}) => {
  const { onSearchChange, booksData, searchValue, showModal } = props;
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
            <a className="search__item-link" href="#ref" onClick={() => showModal(book.id)}>
              <p className="search__item-title">{book.title}</p>
              <p className="search__item-author">{book.author}</p>
              <ArrowIcon className="search__item-icon" />
            </a>
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
    showModal: (id) => dispatch(showModalAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
