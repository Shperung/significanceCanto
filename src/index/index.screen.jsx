import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'

class IndexScreen extends Component {
  render() {
    return (
      <div>
      <Link to='/artists'>artists</Link>
        IndexScreen
      
        
      </div>
    );
  }
}

export default IndexScreen;
