import React, { Component } from 'react';

//Import Styles
import './Edit.css';

//Connect to the redux store
import { connect } from 'react-redux';

//Get redux store
const mapStateToProps = reduxState => ({
    movie: reduxState.movie
});

class Edit extends Component {
  render() {
      const movie = this.props.movie;
    return (
      <div>
        <h1>Edit page</h1>
        <pre>{JSON.stringify(movie)}</pre>
        <img src={movie.poster} alt={movie.description}/>
        <h2>{movie.title}</h2>
        <h3>Genre:</h3>
        <textarea value={movie.description}></textarea>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Edit);