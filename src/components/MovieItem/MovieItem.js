import React, { Component } from 'react';

//Import Styles
import './MovieItem.css';

//Import to do routing
import {withRouter} from 'react-router-dom';

class MovieItem extends Component {

  goToDetailsPage = (event, movie_id) => {
    console.log('movie id is:', movie_id);
    //Change page from / to /understand
    this.props.history.push(`/detials?movie_id=${movie_id}`);
  }

  render() {
    const movie = this.props.movie;
    return (
      <section onClick={(event) => this.goToDetailsPage(event, movie.id) }>
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

export default withRouter(MovieItem);