import React from 'react';
import { BrowserRuoter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = props => (
  <Router>
    <Switch>
      <Route exact path='/' component={ Homepage } />
    </Switch>
  </Router>
)

export default App;
