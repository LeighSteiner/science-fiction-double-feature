import React from 'react';
import ContentForm from './ContentForm'

export default (props) => (
<div>
  list of books
  <span> add a book! </span>
  <ContentForm onSubmit={props.onSubmit}/>
</div>
)