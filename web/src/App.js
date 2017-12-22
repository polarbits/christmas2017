import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import Wish from './components/Wish';
import Marker from './components/Marker';

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