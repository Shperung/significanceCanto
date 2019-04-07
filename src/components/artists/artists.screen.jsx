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
    console.log("artists", this.props.artists);
    return (
      <div>
      <Link to='/'>Go home</Link>
        ArtistsScreen2
      
        
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
