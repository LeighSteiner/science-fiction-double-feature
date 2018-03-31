import axios from 'axios';

const ADD_REVIEW = 'ADD_REVIEW';

const review = '';

const addReview = (review) => ({ type: ADD_REVIEW, review });

export const createReview = (review) => {
  return function thunk(dispatch) {
  	return axios.post(`/api/reviews`, review)
  	.then( res => dispatch(addReview(res.data)))
  	.catch( err => console.log(err) )
  }
}

export default function (state = review, action){
  switch(action.type) {
  	case ADD_REVIEW:
  	  return action.review
  	default:
  	  return state 
  }
}