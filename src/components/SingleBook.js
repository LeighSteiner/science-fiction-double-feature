import React, { Component } from 'react';
import ContentForm from './ContentForm';
import ReviewForm from './ReviewForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

import { fetchOneBook, changeBook, createReview } from '../reducers';

class SingleBook extends Component {
  constructor(){
  	super();
    this.state ={
      viewReviews : false, 
      goHome : false,
    }
  	this.editSubmit = this.editSubmit.bind(this);
  	this.submitReview = this.submitReview.bind(this);
    this.toggleReview = this.toggleReview.bind(this);
  }

    editSubmit (event) {
      event.preventDefault();
	    let newContent = {
	      title: event.target.title.value || this.props.singleBook.title, 
	      author: event.target.author.value || this.props.singleBook.author, 
	      publicationDate: event.target.publicationDate.value || this.props.singleBook.publicationDate, 
	      genre: event.target.genre.value || this.props.singleBook.genre,
        summary: event.target.summary.value || this.props.singleBook.summary,
	    }
	    
	    this.props.updateBook(this.props.match.params.id, newContent);
	    event.target.title.value = "";
	    event.target.author.value = "";
	    event.target.publicationDate.value = "";
	    event.target.genre.value = event.target.genre.value;
      event.target.summary.value = "";
	
	           
    }

    submitReview(event){
    	event.preventDefault();
      console.log({text: event.target.review.value, book_id: this.props.singleBook.id})
      this.props.sendReview({text: event.target.review.value, book_id: this.props.singleBook.id})
      .then(() =>  this.setState({ goHome: true }))
      event.target.review.value = "";

    }

    toggleReview(){
      this.setState({viewReviews: !this.state.viewReviews});
    }

   componentDidMount(){
  	this.props.loadOneBook(this.props.match.params.id)
   }

  render(){
    let book = this.props.singleBook
    return (
     <div>
 	    {
 	       book && book.title ? 
 	      <div>
          <h2>{book.title} - {book.author} </h2>
          <p>{book.summary}</p>
          <span>first published: {book.publicationDate} - <em>{book.genre}</em></span> 

          </div>
 	      :null
 	    }
      {!this.state.viewReviews && <button onClick={this.toggleReview}>View Reviews?</button>}
      {this.state.viewReviews && 
        <div className="review-list">
        <ol>
        {this.props.singleBook.reviews.length? this.props.singleBook.reviews.map(review => <li key={review.id}>{review.text}</li>) : <li> no reviews. write one! </li>}
        </ol>
        <button onClick={this.toggleReview}>Hide Reviews?</button>
        </div>
      }
      <div className="flex-container">
       <ContentForm onSubmit={this.editSubmit}/>
       <ReviewForm onSubmit={this.submitReview}/> 
      </div>
       { this.state.goHome ? <Redirect to='/' /> :null }
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