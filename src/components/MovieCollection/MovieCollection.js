import React, { Component } from 'react';

//Import Styles
import './MovieCollection.css';

//Import components to use on MovieCollection
import MovieList from '../MovieList/MovieList';

class MovieCollection extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <h2>Check out Some of my movies!</h2>
        <MovieList />
      </div>
    );
  }
}

export default MovieCollection;