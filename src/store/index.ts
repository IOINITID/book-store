import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';

const store = createStore(rootReducer, composeWithDevTools());

export type IRootState = ReturnType<typeof rootReducer>;

export default store;
