import React, { Component } from 'react';

//Import Styles
import './MovieItem.css';

class MovieItem extends Component {
  // Renders the entire app on the DOM
  render() {
    const movie = this.props.movie;
    return (
      <section>
        <div className='movie-container'>
          <div className='image-pic'>
            <img src={movie.poster} alt={movie.description}/>
          </div>
          <div>
            <h4>{movie.title}</h4>
            <p>{movie.description}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieItem;