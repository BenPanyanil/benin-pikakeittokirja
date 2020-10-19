import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import Nav from './components/Nav'
import FrontPage from './pages/FrontPage'
import DetailPage from './pages/DetailPage'
import RecipePage from './pages/RecipePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/detail" component={DetailPage} />
          <Route path="/recipe" component={RecipePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
