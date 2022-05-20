import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { postsReducer } from './redusers/posts';
import { isAuthReduser } from './redusers/isAuth';

const rootReduser = combineReducers({
  posts: postsReducer,
  isAuth: isAuthReduser,
});

const store = createStore(rootReduser, applyMiddleware(thunk));

export default store;
