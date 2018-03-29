import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './style.css';

class App extends Component {
  constructor(){
    super();
    this.addSubmit = this.addSubmit.bind(this);
    this.editSubmit = this.editSubmit.bind(this)
  }

  addSubmit(event){
    event.preventDefault();
    let newContent = {
      title: event.target.title.value, 
      author: event.target.author.value, 
      publication: event.target.publication.value, 
      genre: event.target.genre.value,
    }
  }
  editSubmit(event){
    event.preventDefault();
    let newContent = {
      title: event.target.title.value, 
      author: event.target.author.value, 
      publication: event.target.publication.value, 
      genre: event.target.genre.value,
    }
    // dispatch(updateContentUnit())

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Science Fiction Double Feature Space Depot</h1>
        </header>
      </div>
    );
  }
}
export default App;
