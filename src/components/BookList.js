import React from 'react';
import ContentForm from './ContentForm'

export default (props) => (
<div>
  <ul>
    {
      props.books && props.books.length ? props.books.map((book) => <li key={book.id}>{book.title} - {book.author}</li>) : null
    }
  </ul>
  <span> add a book! </span>
  <ContentForm onSubmit={props.onSubmit}/>
</div>
)