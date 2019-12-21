import React, { Component } from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import history from './history';
import MyApp from './Views/MyApp/';
import Page1 from './Views/Page1/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={MyApp} />
            <Route path="/myapp" component={MyApp} />
            <Route path="/page1" component={Page1} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
