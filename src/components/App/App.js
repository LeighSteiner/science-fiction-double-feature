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
          <h1 className="App-title"><Link to="/">Science Fiction Double Feature Space Depot     <i className="em em-rocket App-logo"></i> </Link></h1>
        </header>
        { 
         this.props.match.isExact ? <BookList onSubmit={this.props.addSubmit} books={this.props.bookList}/> : null 
        }
      </div>
    );
  }
}
export default App;

