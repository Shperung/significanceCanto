import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'
import { connect } from 'react-redux';

import { getArtist } from '../../actions/artists.astion.js';


class ArtistScreen extends Component {

    componentDidMount() {
        this.props.getArtist(this.props.match.params.unique);
    }
     
 
  render() {

    return (
      <div>
      <Link to='/'>Go home</Link>
        <h1>
            {
                this.props.artist && this.props.artist.name ? this.props.artist.name : ''
            }
        </h1>
        
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
      artist: state.artist
    }
  };
  
  const mapDispatchToProps = {
    getArtist,
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ArtistScreen);
  
