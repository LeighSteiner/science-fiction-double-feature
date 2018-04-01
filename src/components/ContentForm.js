import React from 'react';

export default (props) => (
 <form onSubmit={props.onSubmit}>
 <label>Title:</label>
 <input name="title" /> 
 <label>Author:</label>
 <input name="author" /> 
  <label>Publication Date:</label>
 <input name="publicationDate" /> 
  <label>Genre:</label>
  <select name="genre">
 	<option value="hard scifi">hard scifi</option>
 	<option value="cassette-punk">cassette-punk</option>
  	<option value="Afrofuturism">Afrofuturism</option>
   	<option value="speculative fiction">speculative fiction</option>
 </select>
 <div className="alignment-container">
 <label> Summary: </label> 
 <textarea name="summary" />
 </div>
 <button type="submit">boom!</button>
 </form>
)