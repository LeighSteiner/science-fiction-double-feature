import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import demo from './demo';
import bookList from './bookList';
import singleBook from './singleBook';

const Reducers = combineReducers({
    demo,
    singleBook, 
    bookList,
    routing: routerReducer,
});

export default Reducers;
