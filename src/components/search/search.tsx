import React, { Fragment, useEffect, useRef } from 'react';
import './search.scss';
import SearchIcon from '../../assets/images/search-icon.svg';
import { connect } from 'react-redux';
import { searchChangeAction, showModalAction } from '../../actions';
import ArrowIcon from '../../assets/images/arrow-icon.svg';

const Search = (props: {
  searchChange: (searchValue) => void;
  booksData: [];
  searchValue: string;
  showModal: (id) => void;
}) => {
  const { searchChange, booksData, searchValue, showModal } = props;
  const onInputChange = (evt) => {
    searchChange(evt.target.value);
  };

  const onSearch = (itemsData, searchValue) => {
    if (itemsData.length && searchValue) {
      return itemsData.filter((item) => item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
    }

    return [];
  };

  const searchListData = onSearch(booksData, searchValue);

  const isMobile = window.matchMedia('(max-width: 1343px)').matches;

  const searchList = searchValue ? (
    <ul className="search__list">
      <p className="search__result">
        {searchListData.length ? 'Результаты поиска' : 'По вашему запросу ничего не найдено'}
      </p>
      {searchListData &&
        searchListData.map((book, index) => {
          return (
            <li className="search__item" key={book.title + index}>
              <a
                className="search__item-link"
                href="#ref"
                onClick={() => {
                  showModal(book.id);
                  searchChange('');
                }}
              >
                <p className="search__item-title">{book.title}</p>
                <p className="search__item-author">{book.author}</p>
                <ArrowIcon className="search__item-icon" />
              </a>
            </li>
          );
        })}
    </ul>
  ) : null;

  const searchListMobile = searchValue ? (
    <ul className="search__list search__list--mobile">
      <p className="search__result">
        {searchListData.length ? 'Результаты поиска' : 'По вашему запросу ничего не найдено'}
      </p>
      {searchListData &&
        searchListData.map((book, index) => {
          return (
            <li className="search__item" key={book.title + index}>
              <a
                className="search__item-link"
                href="#ref"
                onClick={() => {
                  showModal(book.id);
                  searchChange('');
                }}
              >
                <img
                  className="search__item-image "
                  src={`images/${book.image}-1.jpg`}
                  alt={`Обложка книги ${book.title} .`}
                  width="88"
                  height="104"
                />
                <p className="search__item-title">{book.title}</p>
                <p className="search__item-author">{book.author}</p>
                <ArrowIcon className="search__item-icon" />
              </a>
            </li>
          );
        })}
    </ul>
  ) : null;

  const formRef = useRef(null);

  const onFormCloseClick = (evt) => {
    evt.preventDefault();

    if (!formRef.current.contains(evt.target) && !isMobile) {
      searchChange('');
    }
  };

  useEffect(() => {
    document.addEventListener('click', onFormCloseClick);
    return () => document.removeEventListener('click', onFormCloseClick);
  }, []);
  return (
    <Fragment>
      <form className="search" action="#" ref={formRef}>
        <label className="search__label" htmlFor="">
          <input
            className={`search__input ${searchListData.length && !isMobile ? 'search__input--active' : null}`}
            type="search"
            placeholder="Поиск"
            onChange={onInputChange}
            value={searchValue}
          />
          {!isMobile && searchList}
          <SearchIcon className="search__icon" />
        </label>
      </form>
      {isMobile && searchListMobile}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    booksData: state.default.books,
    searchValue: state.search.searchValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchChange: (searchValue) => dispatch(searchChangeAction(searchValue)),
    showModal: (id) => dispatch(showModalAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
