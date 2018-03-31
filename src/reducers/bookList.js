import axios from 'axios';

//action types -- contained in a variable to avoid typos 
const GET_BOOK_LIST = 'GET_BOOK_LIST';
const ADD_BOOK_TO_LIST = 'ADD_BOOK_TO_LIST';
const GET_GENRE_LIST = 'GET_GENRE_LIST';

//initial state
const bookList = [];

//action creators
export const getBookList = (books) => ({ type: GET_BOOK_LIST, books })
export const addBookToList = (book) => ({ type: ADD_BOOK_TO_LIST, book})
export const getGenreList = (books) => ({ type: GET_GENRE_LIST, books})

//thunk creators 
export const fetchBookList = () => {
 return function thunk(dispatch) {
 	return axios.get(`/api/books`)
 	.then( res => dispatch(getBookList(res.data)))
 	.catch( err => console.log(err))
 }
}

export const fetchGenreList = (genre) => {
  return function thunk(dispatch) {
  	return axios.get(`/api/books/genres/${genre}`)
  	.then( res => dispatch(getGenreList(res.data)))
  	.catch( err => console.log(err))
  }
}

//reducer 
export default function (state = bookList, action) {
  switch(action.type) {
  	case GET_BOOK_LIST:
  	  return action.books
  	case ADD_BOOK_TO_LIST:
  	  return [...state, action.book]
  	case GET_GENRE_LIST:
  	  return action.books
  	default:
  	  return state 
  }
}