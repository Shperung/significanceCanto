import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import IndexScreen from './index/index.screen';
import ArtistsScreen from './artists/artists.screen'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        home
        <br />
        <Router>
          <React.Fragment>
            <Route path="/" component={IndexScreen} />
            <Route path="/artists" component={ArtistsScreen} />
          </React.Fragment>
        </Router>


      </div>
    );
  }
}

export default App;
