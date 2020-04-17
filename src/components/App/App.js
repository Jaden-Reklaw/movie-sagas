import React, { Component } from 'react';

//Import individual components here
import Header from '../Header/Header';
import MovieCollection from '../MovieCollection/MovieCollection';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <Header />
        <MovieCollection />
      </div>
    );
  }
}

export default App;
