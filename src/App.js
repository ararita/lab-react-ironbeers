import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeers from './components/RandomBeers';
import NewBeer from './components/NewBeer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Home />
    </div>
  );
}

export default App;
