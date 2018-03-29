import React from 'react';
import ContentForm from './ContentForm'

export default (props) => (
<div>
 some stuff about a book
 <ContentForm onSubmit={props.onSubmit}/>
</div>
)