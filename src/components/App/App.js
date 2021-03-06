import React, { Component } from 'react';

//Import individual components here
import Header from '../Header/Header';

//Import pages here
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';
import Edit from '../Pages/Edit/Edit';

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
          <Route path='/details' component={Details} />
          <Route path='/edit' component={Edit} />
        </Router> 
      </div>
    );
  }
}

export default App;
