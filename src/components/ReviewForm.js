import React from 'react';

export default (props) => (
<form className="review-form" onSubmit={props.onSubmit}>
  <label>Review this book:</label>
  <br />
  <textarea name="review"/>
  <br />
  <button type="submit"> Tell us what you really think: </button>
</form>
)