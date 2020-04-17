import React, { Component } from 'react';

//Import Styles
import './Home.css';

//Import components to be used on home page
import MovieCollection from '../../MovieCollection/MovieCollection';

class Home extends Component {
  render() {
    return (
      <div>
        <MovieCollection />
      </div>
    );
  }
}

export default Home;