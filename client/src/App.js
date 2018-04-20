import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';
import { LandingPage } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/"
              component={LandingPage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
