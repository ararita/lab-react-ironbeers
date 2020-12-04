import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Link to="/beers">All Beers</Link>
      <Link to="/random-beers">Random Beers</Link>
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
};

export default Home;
