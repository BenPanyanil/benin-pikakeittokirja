import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import { RecipeProvider } from './RecipeContext'

import Nav from './components/Nav'
import Footer from './components/Footer'
import FrontPage from './pages/FrontPage'
import Details from './pages/Details'
import Recipe from './pages/Recipe'
import TransitionOverlay from './components/TransitionOverlay'

function App() {

  return (
    <RecipeProvider>
      <Router>
        <div className="App">
          <TransitionOverlay />
          <Nav />
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/detail" component={Details} />
            <Route path="/recipe" component={Recipe} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </RecipeProvider>
  );
}

export default App;
