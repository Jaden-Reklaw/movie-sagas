import React, { Component } from 'react';

//Import Styles
import './Edit.css';

//Connect to the redux store
import { connect } from 'react-redux';

//Get redux store
const mapStateToProps = reduxState => ({
    movie: reduxState.movie,
    genres: reduxState.genres
});

class Edit extends Component {
  render() {
      const movie = this.props.movie;
      const genres = this.props.genres;
    return (
      <div>
        <h1>Edit page</h1>
        <pre>{JSON.stringify(movie)}</pre>
        <img src={movie.poster} alt={movie.description}/>
        <h2>{movie.title}</h2>
        {JSON.stringify(genres)}
        <h3>Genre: {genres.map((genre, i) => <span key={i}>{genre.name} </span>)}</h3>
        <textarea value={movie.description}></textarea>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Edit);