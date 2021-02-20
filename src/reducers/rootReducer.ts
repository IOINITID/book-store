import { combineReducers } from 'redux';
import defaultReducer from './index';
import searchRedfucer from './searchReducer';

const rootReducer = combineReducers({
  default: defaultReducer,
  search: searchRedfucer,
});

export { rootReducer };
