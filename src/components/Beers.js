import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

const beersApi = 'https://ih-beers-api2.herokuapp.com/beers';

class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get(beersApi)
      .then((res) => {
        // console.log(res);
        this.setState({
          beers: res.data,
        });
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.state.beers.map((beer) => {
            {
              /* console.log(beer); */
            }
            return (
              <div key={beer._id}>
                <img
                  src={beer.image_url}
                  alt="beer"
                  style={{
                    width: '100px',
                  }}
                ></img>
                <h2>
                  <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                </h2>
                <h3>{beer.tagline}</h3>
                <p>
                  <strong>Created by: </strong>
                  {beer.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Beers;
