import React, { Component } from 'react';
import ContentForm from './ContentForm';
import ReviewForm from './ReviewForm';
import { connect } from 'react-redux';
import { fetchOneBook, changeBook, createReview } from '../reducers';

class SingleBook extends Component {
  constructor(){
  	super();
  	this.editSubmit = this.editSubmit.bind(this);
  	this.submitReview = this.submitReview.bind(this);
  }

    editSubmit (event) {
      event.preventDefault();
	  let newContent = {
	      title: event.target.title.value || this.props.singleBook.title, 
	      author: event.target.author.value || this.props.singleBook.author, 
	      publicationDate: event.target.publicationDate.value || this.props.singleBook.publicationDate, 
	      genre: event.target.genre.value || this.props.singleBook.genre,
	    }
	    
	    this.props.updateBook(this.props.match.params.id, newContent)
	    event.target.title.value = "";
	    event.target.author.value = "";
	    event.target.publicationDate.value = ""
	    event.target.genre.value = ""
	
	           
    }

    submitReview(event){
    	event.preventDefault();
      console.log({text: event.target.review.value, book_id: this.props.singleBook.id})
      this.props.sendReview({text: event.target.review.value, book_id: this.props.singleBook.id})
    	event.target.review.value = "";

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
       <ReviewForm onSubmit={this.submitReview}/> 
     </div>
 
    )
  }
}
const mapStateToProps = (state) => ({
  singleBook: state.singleBook, 
})
const mapDispatchToProps = (dispatch) => ({
  loadOneBook: (id) => dispatch(fetchOneBook(id)), 
  updateBook: (id, book) => dispatch(changeBook(id, book)), 
  sendReview: (review) => dispatch(createReview(review)),
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleBook);