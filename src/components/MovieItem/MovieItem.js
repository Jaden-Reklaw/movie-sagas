import React, { Component } from 'react';

//Import Styles
import './MovieItem.css';

class MovieItem extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        {JSON.stringify(this.props.movie)}
      </div>
    );
  }
}

export default MovieItem;