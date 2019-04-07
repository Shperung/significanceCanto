import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store.js';

import IndexScreen from './components/index/index.screen.jsx';
import ArtistsScreen from './components/artists/artists.screen.jsx';

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <img src={logo} width={50} alt="logo"/>
        <Router>
          <React.Fragment>
            <Route path="/" component={IndexScreen} />
            <Route path="/artists" component={ArtistsScreen} />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
