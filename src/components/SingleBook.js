import React, { Component } from 'react';
import ContentForm from './ContentForm'
import { connect } from 'react-redux'
import { fetchOneBook, changeBook } from '../reducers'

class SingleBook extends Component {
  constructor(){
  	super();
  	this.editSubmit = this.editSubmit.bind(this);
  }

   editSubmit (event) {
      event.preventDefault();
	  let newContent = {
	      title: event.target.title.value || this.props.singleBook.title, 
	      author: event.target.author.value || this.props.singleBook.author, 
	      publicationDate: event.target.publicationDate.value || this.props.singleBook.publicationDate, 
	      genre: event.target.genre.value || this.props.singleBook.genre,
	    }
	   return this.props.updateBook(this.props.match.params.id, newContent)
	           
    }
  componentDidMount(){
  	this.props.loadOneBook(this.props.match.params.id)
  }
  render(){
    return (
     <div>
 	    {
 	      this.props.singleBook && this.props.singleBook.title ? 
 	      <div>
 	      <span>{this.props.singleBook.title}</span> 
          <span> {this.props.singleBook.author}</span>
          </div>
 	      :null
 	    }
       <ContentForm onSubmit={this.editSubmit}/>
     </div>
 
    )
  }
}
const mapStateToProps = (state) => ({
  singleBook: state.singleBook, 
})
const mapDispatchToProps = (dispatch) => ({
  loadOneBook: (id) => dispatch(fetchOneBook(id)), 
  updateBook: (id, book) => dispatch(changeBook(id, book))
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleBook);