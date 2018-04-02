import React from 'react';

export default (props) => (
<form className="review-form" onSubmit={props.onSubmit}>
  <label>Review this book:</label>
  <br />
  <textarea name="review"/> 
  <label>Rating:</label>
  <select name="rating">
  	<option value="5" >5</option>
  	<option value="4" >4</option>
  	<option value="3" >3</option>
  	<option value="2" >2</option>
  	<option value="1" >1</option>
  </select>
  <br />
  <button type="submit">Tell us what you really think</button>
</form>
)