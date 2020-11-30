import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import { ContextProvider } from './Context'

import Nav from './components/Nav'
import Footer from './components/Footer'
import FrontPage from './pages/FrontPage'
import DetailsPage from './pages/DetailsPage'
import RecipePage from './pages/RecipePage'
import ColorThemePopup from './components/ColorThemePopup'
import TransitionOverlay from './components/TransitionOverlay'
import EmptyPage from './pages/EmptyPage';

function App() {

  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <TransitionOverlay />
          <Nav />
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/annoskoko" component={DetailsPage} />
            <Route path="/resepti" component={RecipePage} />
            <Route component={EmptyPage} />
          </Switch>
          <Footer />
        </div>
        <ColorThemePopup />
      </Router>
    </ContextProvider>
  );
}

export default App;
