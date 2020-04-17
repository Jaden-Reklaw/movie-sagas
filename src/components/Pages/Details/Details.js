import React, { Component } from 'react';

//Import Styles
import './Details.css';

class Details extends Component {

  componentDidMount() {
    this.getMovieId();
  }

  getMovieId = () => {
    let querystring = this.props.location.search;
    let movie_id = querystring.replace('?movie_id=', '');
    console.log('movie id is:', movie_id);
  }
  render() {
    return (
      <div>
       <h2>Details Page</h2>
      </div>
    );
  }
}

export default Details;