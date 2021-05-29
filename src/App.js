import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import './App.css';

const App = props => (
  <Router>
    <Switch>
      <Route exact path='/' component={ Homepage } />
    </Switch>
  </Router>
)

export default App;
