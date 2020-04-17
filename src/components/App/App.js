import React, { Component } from 'react';

//Import individual components here
import Header from '../Header/Header';
import Home from '../Pages/Home/Home';

//Import Modules for routing pages
import { HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Route exact path='/' component={Home} />
          {/* <Route path='/detials' component={Details} /> */}
        </Router> 
      </div>
    );
  }
}

export default App;
