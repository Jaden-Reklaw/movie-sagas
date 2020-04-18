import React, { Component } from 'react';

//Import Styles
import './MovieList.css';

//Connect to the redux store
import { connect } from 'react-redux';

//Import components
import MovieItem from '../MovieItem/MovieItem';

const mapStateToProps = reduxState => ({
     movies: reduxState.movies
});

class MovieList extends Component {
    componentDidMount() {
      // use component did mount to dispatch an action to request the plantList from the API
      this.props.dispatch({type: 'FETCH_MOVIES'});
    }

  render() {
    return (
      <div>
        {this.props.movies.map((movie, i) => <MovieItem key={i} movie={movie}/>)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(MovieList);