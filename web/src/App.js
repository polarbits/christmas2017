import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Wish from './Wish';
import Marker from './Marker';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/wish/:id" component={Wish} />
          <Route path="/marker" component={Marker} />
        </div>
      </Router>
    );
  }
}

export default App;