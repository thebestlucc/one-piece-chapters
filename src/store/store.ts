import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import {chaptersList,singleChapter } from './chapters/chapters';

const reducer = combineReducers({
  chaptersList,
  singleChapter
});
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default createStore(reducer, enhancer);