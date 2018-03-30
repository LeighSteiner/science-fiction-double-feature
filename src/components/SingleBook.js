import React, { Component } from 'react';
import ContentForm from './ContentForm'
import { connect } from 'react-redux'
import { fetchOneBook } from '../reducers'

// const singleBook = (props) => (
// <div>
//  some stuff about a book
//  <ContentForm onSubmit={props.onSubmit}/>
// </div>
// )

class SingleBook extends Component {
  componentDidMount(){
  	this.props.loadOneBook(this.props.match.params.id)
  }
  render(){
    return (
     <div>
 	    {
 	      this.props.singleBook && this.props.singleBook.title ? 
 	      <span>{this.props.singleBook.title}</span> :null
 	    }
       <ContentForm onSubmit={this.props.onSubmit}/>
     </div>
 
    )
  }
}
const mapStateToProps = (state) => ({
  singleBook: state.singleBook, 
})
const mapDispatchToProps = (dispatch) => ({
  loadOneBook: (id) => dispatch(fetchOneBook(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleBook);