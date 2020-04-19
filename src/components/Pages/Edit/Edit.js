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
  state = {
    newValues: {
      title: this.props.movie.title,
      description: this.props.movie.description,
    }
  }

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
    let movie_id = querystring.replace('/edit/', '');
    console.log('editing movie id is:', movie_id);

    //Notice the lack of the S on FETCH_MOVIE
    this.props.dispatch({type: 'FETCH_MOVIE', payload: movie_id});
  }

  //Method for fetching the movie's genres
  getGenres = () => {
    //Looking for query string to get id of movie
    console.log(this.props.location.pathname);
    let querystring = this.props.location.pathname;

    //Removing extra part of the path
    let movie_id = querystring.replace('/edit/', '');
    console.log('editing movie id is:', movie_id);

    //Notice the lack of the S on FETCH_MOVIE
    this.props.dispatch({type: 'FETCH_GENRES', payload: movie_id});
  }

  //Handles the change of state inside the textarea field
  handleChangeFor = (event, propertyName) => {
    this.setState({
      newValues: {...this.state.newValues,[propertyName]: event.target.value,}
    });
  }

  //Handles the event when the user clicks on the save button.
  handleSubmit = () => {
    //Dispatch the update movie title and description
    this.props.dispatch({type: 'PUT_MOVIE', payload: {newDesTitle: this.state.newValues, id: this.props.movie.id}});
    //Get the movies again from the server that way when you switch you see update instantly
    this.props.dispatch({type: 'FETCH_MOVIES'});
    //Navigate back to the details page
    this.props.history.push(`/details/id-number=${this.props.movie.id}`);
  }

  render() {
      const movie = this.props.movie;
      const genres = this.props.genres;
    return (
      <div>
        <h1>Edit page</h1>
        <img src={movie.poster} alt={movie.description}/><br />
        <label>Edit Title:</label>
        <input value={this.state.newValues.title} onChange={(event) => this.handleChangeFor(event, 'title')}/>
        <h3>Genre: {genres.map((genre, i) => <span key={i}>{genre.name} </span>)}</h3>
        <label>Edit Description:</label>
        <textarea value={this.state.newValues.description} onChange={(event) => this.handleChangeFor(event, 'description')}></textarea>
        <br /><button onClick={this.handleSubmit}>Save</button>
        <button>Cancel</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Edit);