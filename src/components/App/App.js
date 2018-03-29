import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './style.css';
import BookList from '../BookList.js';

class App extends Component {
  // constructor(){
  //   super();
  //   // this.addSubmit = this.addSubmit.bind(this);
  //   // this.editSubmit = this.editSubmit.bind(this)
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Science Fiction Double Feature Space Depot</h1>
        </header>
        <BookList onSubmit={this.props.addSubmit} />
      </div>
    );
  }
}
export default App;
