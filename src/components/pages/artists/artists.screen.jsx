// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getArtists } from '../../../actions/artists.astion.js';

type Props = {
  getArtists: Function,
  artists: [Object]
};

class ArtistsScreen extends Component<Props> {
  componentDidMount() {
    this.props.getArtists();
  }

  render() {
    return (
      <div>
        <h1>ArtistsScreen</h1>
        <Link to="/">Go home</Link>
        {this.props.artists ? (
          <ul>
            {this.props.artists.map(artist => (
              <li key={artist._id}>
                <Link to={`/artists/${artist.unique}`}>{artist.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <span>no data</span>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    artists: state.artists
  };
};

const mapDispatchToProps = {
  getArtists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistsScreen);
