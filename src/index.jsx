// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store.js';

import IndexScreen from './components/pages/index/index.screen.jsx';
import ArtistsScreen from './components/pages/artists/artists.screen.jsx';
import ArtistScreen from './components/pages/artists/artist.screen.jsx';

import Aside from './components/modules/aside/aside.block.jsx';

import './scss/style.scss';
import cancel from './svg/assets/cancel.svg';
import arrow from './svg/assets/arrow-point-to-right.svg';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <main id="main">
          <Aside />
          <header id="header"></header>
          <section id="routes-section">
            <React.Fragment>
              <Route exact path="/" component={IndexScreen} />
              <Route exact path="/artists" component={ArtistsScreen} />
              <Route exact path="/artists/:unique" component={ArtistScreen} />
            </React.Fragment>
          </section>
          <footer id="footer"></footer>
        </main>
      </Router>
    </Provider>
  );
};

const rootNode = document.getElementById('js--root');
if (rootNode) {
  ReactDOM.render(<App />, rootNode);
}
