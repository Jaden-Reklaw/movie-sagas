import React, { Component } from 'react';

//Import Styles
import './Details.css';

//Connect to the redux store
import { connect } from 'react-redux';

//Get redux store
const mapStateToProps = reduxState => ({
  reduxState
});

class Details extends Component {
  componentDidMount() {
    this.getMovieId();
    this.getGenres();
  }

  //Method for getting a movie
  getMovieId = () => {
    //Looking for query string to get id of movie
    console.log(this.props.location.pathname);
    let querystring = this.props.location.pathname;

    //Removing extra part of the path
    let movie_id = querystring.replace('/details/id-number=', '');
    console.log('details movie id is:', movie_id);

    //Notice the lack of the S on FETCH_MOVIE
    this.props.dispatch({type: 'FETCH_MOVIE', payload: movie_id});
  }

  //Method for fetching the movie's genres
  getGenres = () => {
    //Looking for query string to get id of movie
    console.log(this.props.location.pathname);
    let querystring = this.props.location.pathname;

    //Removing extra part of the path
    let movie_id = querystring.replace('/details/id-number=', '');
    console.log('details movie id is:', movie_id);

    //Notice the lack of the S on FETCH_MOVIE
    this.props.dispatch({type: 'FETCH_GENRES', payload: movie_id});
  }

  //Method that when backButton is pushed returns to Home.js
  backButton = () => {
    this.props.history.push(`/`);
  }

  //Method that when editButton is pushed goes to the Edit.js
  editButton = () => {
    this.props.history.push(`/edit/${this.props.location.pathname.replace('/details/id-number=', '')}`);
  }

  render() {
    const movie = this.props.reduxState.movie;
    const genres = this.props.reduxState.genres;
    return (
      <div>
        <h2>Details Page</h2>
        <img src={movie.poster} alt={movie.description}/>
        <h2>{movie.title}</h2>
        <h3>Genre: {genres.map((genre, i) => <span key={i}>{genre.name} </span>)}</h3>
        <p>{movie.description}</p>
        <button onClick={this.backButton}>Back to List</button>
        <button onClick={this.editButton}>Edit</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Details);