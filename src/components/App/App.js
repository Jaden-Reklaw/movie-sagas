import React, { Component } from 'react';

//Import individual components here
import Header from '../Header/Header';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
