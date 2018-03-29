import React from 'react';

export default (props) => (
 <form onSubmit={props.onSubmit}>
 <label>Title:</label>
 <input name="title" /> 
 <label>Author:</label>
 <input name="author" /> 
  <label>Publication Date:</label>
 <input name="publicationDate" /> 
  <label>Genre</label>
 <input name="genre" /> 
 <button type="submit">let's go!</button>
 </form>
)