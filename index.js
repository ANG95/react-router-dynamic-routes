import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home';
import Topics from './Topics';

class App extends Component {
  render() {
    return (
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>
          
          <Route exact path='/' component={Home} />
          <Route path='/topics' component={Topics} />
        </div>
    );
  }
}

render(
  <Router>
  <App />
  </Router>
  , document.getElementById('root'));
