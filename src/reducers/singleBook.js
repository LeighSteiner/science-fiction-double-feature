import axios from 'axios';

//action types
const GET_ONE_BOOK = 'GET_ONE_BOOK';
const UPDATE_BOOK = 'UPDATE_BOOK';
const MAKE_NEW_BOOK = 'MAKE_NEW_BOOK';

//initial state 
const book = {};

//action creators 


export const getOneBook = (book) => ({ type: GET_ONE_BOOK, book });
export const updateBook = (book) => ({ type: UPDATE_BOOK, book });
export const makeNewBook = (book) => ({ type: MAKE_NEW_BOOK, book });

//thunk creators 

export const fetchOneBook = (id) => {
  return function thunk(dispatch) {
  	return axios.get(`/api/books/book/${id}`)
  	.then( res => dispatch(getOneBook(res.data)))
  	.catch( err => console.log(err))
  }
}

export const changeBook = (id, book) => {
  return function thunk(dispatch) {
  	return axios.put(`/api/books/book/${id}`, book)
  	.then( res => dispatch(updateBook(res.data)))
  	.catch( err => console.log(err))
  }
}

export const createBrook = (book) => {
  return function thunk(dispatch) {
  	axios.post(`/api/books/new-book`, book)
  	.then( res => dispatch(makeNewBook(res.data)))
  	.catch( err => console.log(err))
  }
}


//reducer 
export default function (state = book, action) {
  switch(action.type) {
  	case GET_ONE_BOOK:
  	  return action.book
  	case UPDATE_BOOK:
  	  return action.book
  	case MAKE_NEW_BOOK:
  	  return action.book
  	default:
  	  return state 
  }
}