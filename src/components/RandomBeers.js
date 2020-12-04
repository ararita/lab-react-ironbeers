import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class RandomBeers extends Component {
  state = {
    random: null,
  };

  componentDidMount() {
    const randomBeer = 'https://ih-beers-api2.herokuapp.com/beers/random';

    axios
      .get(randomBeer)
      .then((res) => {
        this.setState({
          random: res.data,
        });
        // console.log('beer details api', res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.random) {
      return <></>;
    }

    // console.log('props------', this.props);
    return (
      <div>
        <Header />
        <div>
          <img
            src={`${this.state.random.image_url}`}
            style={{
              width: '100px',
            }}
            alt=""
          />
          <div>{this.state.random.name}</div>
          <div>{this.state.random.tagline}</div>
          <div>{this.state.random.first_brewed}</div>
          <div>{this.state.random.attenuation_level}</div>
          <div>{this.state.random.description}</div>
          <div>{this.state.random.contributed_by}</div>
        </div>
      </div>
    );
  }
}

export default RandomBeers;
