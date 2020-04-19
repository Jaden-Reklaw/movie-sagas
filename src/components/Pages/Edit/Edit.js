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
    value: this.props.movie.description,
  }

  //Handles the change of state inside the textarea field
  handleChangeFor = (event) => {
    this.setState({value: event.target.value});
  }

  //Handles the event when the user clicks on the save button.
  handleSubmit = () => {
    //Dispatch the update description
    this.props.dispatch({type: 'PUT_DESCRIPTION', payload: {description: this.state.value, id: this.props.movie.id}});
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
        <pre>{JSON.stringify(movie)}</pre>
        <img src={movie.poster} alt={movie.description}/>
        <h2>{movie.title}</h2>
        <h3>Genre: {genres.map((genre, i) => <span key={i}>{genre.name} </span>)}</h3>
        <textarea value={this.state.value} onChange={(event) => this.handleChangeFor(event)}></textarea>
        <button onClick={this.handleSubmit}>Save</button>
        <button>Cancel</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Edit);