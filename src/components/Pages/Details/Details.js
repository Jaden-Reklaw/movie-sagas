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
  }

  getMovieId = () => {
    //Looking for the id and selecting the id
    console.log(this.props.location.pathname)
    let querystring = this.props.location.pathname;

    //Removing extra part of the path
    let movie_id = querystring.replace('/details/id-number=', '');
    console.log('details movie id is:', movie_id);

    //Notice the lack of the S on FETCH_MOVIE
    this.props.dispatch({type: 'FETCH_MOVIE', payload: movie_id});
  }

  backButton = () => {
    this.props.history.push(`/`);
  }

  editButton = () => {
    this.props.history.push(`/edit/${this.props.location.pathname.replace('/details/id-number=', '')}`);
  }

  render() {
    const movie = this.props.reduxState.movie;
    return (
      <div>
        <h2>Details Page</h2>
        {/* I don't know why this does not work but its forcing me to clone the object 
        before I can access the individual properties of the object*/}
        {/* <pre>{JSON.stringify(this.props.reduxState.movie[0].title)}</pre> */}

        <pre>{JSON.stringify(this.props.reduxState.movie)}</pre>
        <img src={movie.poster} alt={movie.description}/>
        <h2>{movie.title}</h2>
        <h3>Genre:</h3>
        <p>{movie.description}</p>
        <button onClick={this.backButton}>Back</button>
        <button onClick={this.editButton}>Edit</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Details);