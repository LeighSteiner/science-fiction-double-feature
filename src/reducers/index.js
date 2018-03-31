import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import demo from './demo';
import bookList from './bookList';
import singleBook from './singleBook';
import review from './review'

const Reducers = combineReducers({
    demo,
    singleBook, 
    bookList,
    review,
    routing: routerReducer,
});

export * from './bookList';
export * from './singleBook';
export * from './review';

export default Reducers;
