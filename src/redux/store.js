import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import postReducer from './reducers/postReducer';

const rootReducer = combineReducers({
  posts: postReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;