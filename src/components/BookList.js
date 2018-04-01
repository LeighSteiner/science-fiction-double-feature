import React from 'react';
import ContentForm from './ContentForm'
import { Link } from 'react-router-dom';

export default (props) => (
<div className='book-list'>
  <ul>
    {
      props.books && props.books.length ? props.books.map((book) => <li key={book.id}><Link to={`/book/${book.id}`}>{book.title} - {book.author}</Link></li>) : null
    }
  </ul>
  <label> add a book! </label>
  <ContentForm onSubmit={props.onSubmit} />
 </div>

)
