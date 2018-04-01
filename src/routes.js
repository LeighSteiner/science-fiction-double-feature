import React from 'react';
import App from './containers/AppContainer';
import About from './components/About/About';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/book/:id" component={SingleBook} />
      </div>
    </Router>
  )
};

export default Routes;
