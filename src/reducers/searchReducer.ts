import { ActionTypes } from '../utils/constants';

const defaultState = {
  searchValue: '',
  isSearching: false,
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_CHANGE:
      return { ...state, searchValue: action.payload, isSearching: action.payload ? true : false };
    default:
      return state;
  }
};

export default searchReducer;
