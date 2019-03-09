import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'


import ArtistsScreen from './artists/artists.screen.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       home
        <br/>
       <Router>
         <Route path="/artists" component={ArtistsScreen} />
       </Router>
        
      </div>
    );
  }
}

export default App;
