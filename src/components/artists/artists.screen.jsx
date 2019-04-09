import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'
import { connect } from 'react-redux';

import { getArtists } from '../../actions/artists.astion.js';

class ArtistsScreen extends Component {

  componentDidMount() {
    this.props.getArtists();
  }
 
  render() {
    return (
      <div>
      <Link to='/'>Go home</Link>
      {
        this.props.artists ? (
          <ul>
            {
              this.props.artists.map(artist => (
                <li key={artist._id}>
                  {artist.name}
                </li>
              ))
            }
          </ul>
        ) : (
          <span>
            no data
          </span>
        )
      }
      
      
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artists: state.artists
  }
};

const mapDispatchToProps = {
  getArtists,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistsScreen);
