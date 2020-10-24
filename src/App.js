import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import { RecipeProvider } from './RecipeContext'

import Nav from './components/Nav'
import Footer from './components/Footer'
import FrontPage from './pages/FrontPage'
import DetailPage from './pages/DetailPage'
import RecipePage from './pages/RecipePage'

function App() {

  return (
    <RecipeProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/detail" component={DetailPage} />
            <Route path="/recipe" component={RecipePage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </RecipeProvider>
  );
}

export default App;
