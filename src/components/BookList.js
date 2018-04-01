import React from 'react';
import ContentForm from './ContentForm'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const BookList = (props) => { 
  let books = props.BookList
  if (props.match.path === '/genre/:genre' && books.length){
  	console.log('books')
  	// books = books.filter(book => book.genre === props.match.params.genre);
  } 
 return(
<div>
  {props.match.path === "/genre/:genre" ? <h2> genre</h2> :null }
  <ul>
    {
      books && books.length ? books.map((book) => <li key={book.id}><Link to={`/book/${book.id}`}>{book.title} - {book.author}</Link></li>) : null
    }
  </ul>
  <label> add a book! </label>
  <ContentForm onSubmit={props.onSubmit}/>
</div>
)}

const mapStateToProps = (state) => ({ BookList})

const mapDispatchToProps = () => {}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);