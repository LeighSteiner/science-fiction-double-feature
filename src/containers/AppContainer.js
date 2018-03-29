import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchBookList, fetchOneBook, changeBook, createBook } from '../reducers'

import App from '../components/App/App'

function mapStateToProps(state) {
  return {
    results: state.demo.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch), 
    addSubmit: function(event) {
      event.preventDefault();
	  let newContent = {
	      title: event.target.title.value, 
	      author: event.target.author.value, 
	      publicationDate: event.target.publicationDate.value, 
	      genre: event.target.genre.value,
	   }
	   console.log('wwooooo')	
    }, 
    editSubmit: function(event) {
      event.preventDefault();
	  let newContent = {
	      title: event.target.title.value, 
	      author: event.target.author.value, 
	      publicationDate: event.target.publicationDate.value, 
	      genre: event.target.genre.value,
	    }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


//   addSubmit(event){
//     event.preventDefault();
//     let newContent = {
//       title: event.target.title.value, 
//       author: event.target.author.value, 
//       publicationDate: event.target.publicationDate.value, 
//       genre: event.target.genre.value,
//     }
//     console.log('new contnet', newContent)
//   }
//   editSubmit(event){
//     event.preventDefault();
//     let newContent = {
//       title: event.target.title.value, 
//       author: event.target.author.value, 
//       publicationDate: event.target.publicationDate.value, 
//       genre: event.target.genre.value,
//     }
// }