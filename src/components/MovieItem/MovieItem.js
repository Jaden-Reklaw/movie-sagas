import React, { Component } from 'react';

//Import Styles
import './MovieItem.css';

//Import to do routing
import {withRouter} from 'react-router-dom';

class MovieItem extends Component {

  goToDetailsPage = (event, idnumber) => {
    console.log('movie id is:', idnumber);
    //Change page from / to /understand
    this.props.history.push(`/details/id-number=${idnumber}`);
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