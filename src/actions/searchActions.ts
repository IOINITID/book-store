import { ActionTypes } from './types';

const searchChangeAction = (searchValue = '') => {
  return {
    type: ActionTypes.SEARCH_CHANGE,
    payload: searchValue,
  };
};

export { searchChangeAction };
