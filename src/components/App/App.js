import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';
import './style.css';
import BookList from '../BookList.js';

class App extends Component {
  componentDidMount(){
     this.props.loadBooks()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        { /* <img src='https://static6.depositphotos.com/1073974/566/i/950/depositphotos_5668001-stock-photo-open-old-vintage-book-on.jpg' className="App-logo" alt="logo" /> */}
          <h1 className="App-title"><Link to="/">Science Fiction Double Feature Space Depot     <i className="em em-rocket"></i> </Link></h1>
        </header>
        { 
         this.props.match.isExact ? <BookList onSubmit={this.props.addSubmit} books={this.props.bookList}/> : null 
        }
      </div>
    );
  }
}
export default App;

