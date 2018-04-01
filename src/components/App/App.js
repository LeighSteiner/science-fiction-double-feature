import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './style.css';
import BookList from '../BookList.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books : [],
    }
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount(){
     this.props.loadBooks()
     .then(() => this.setState({books: this.props.bookList}))
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.bookList.length !== this.props.bookList.length){
      this.setState({books : nextProps.bookList})
    }
  }

  onClick(event){
    if(event.target.name === "all"){
      this.setState({books: this.props.bookList})
    }else{
      let filterBooks = this.props.bookList.filter((book) => book.genre === event.target.name)
      this.setState({books: filterBooks})
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><Link to="/">Science Fiction Double Feature Space Depot     <i className="em em-rocket App-logo"></i> </Link></h1>
        </header>
        { 
         this.props.match.isExact ? (
          <div className="book-container">
            <BookList onSubmit={this.props.addSubmit} books={this.state.books}/> 
            <div className="footer"> <i className="em em-last_quarter_moon_with_face"></i> view by genre: <button name="all" onClick={this.onClick}> all </button> <button name ="hard scifi" onClick={this.onClick}> hard scifi </button> <button name="Afrofuturism" onClick={this.onClick}> Afrofuturism </button> <button name="cassette-punk" onClick={this.onClick}>cassette punk</button><button name= "speculative fiction" onClick={this.onClick}>speculative fiction</button></div>
          </div>)
          : null 
        }

      </div>
    );
  }
}
export default App;

