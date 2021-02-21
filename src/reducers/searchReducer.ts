import { ActionTypes } from '../actions/types';

const defaultState = {
  searchValue: '',
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_CHANGE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
