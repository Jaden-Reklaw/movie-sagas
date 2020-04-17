import React, { Component } from 'react';

//Import Styles
import './MovieList.css';

//Connect to the redux store
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
     reduxState
});

class MovieList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.props.dispatch({type: 'FETCH_MOVIES'});
    }

  render() {
    return (
      <div>
        <h2>MovieList</h2>
      </div>
    );
  }
}

export default connect(mapStateToProps)(MovieList);