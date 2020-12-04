import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeers from './components/RandomBeers';
import NewBeer from './components/NewBeer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/header" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/beers/random" component={RandomBeers} />
      </Switch>
    </div>
  );
}

export default App;
