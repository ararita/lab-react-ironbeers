import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class BeerDetails extends Component {
  state = {
    details: null,
  };

  componentDidMount() {
    const beerDetailsApi = `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`;

    axios
      .get(beerDetailsApi)
      .then((res) => {
        // console.log(res);
        this.setState({
          details: res.data,
        });
        console.log('beer details api', res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.details) {
      return <></>;
    }

    console.log('props------', this.props);
    return (
      <div>
        <Header />
        <div>
          <img src={`${this.state.details.image_url}`} style={{
                    width: '100px',
                  }} alt="" />
          <div>{this.state.details.name}</div>
          <div>{this.state.details.tagline}</div>
          <div>{this.state.details.first_brewed}</div>
          <div>{this.state.details.attenuation_level}</div>
          <div>{this.state.details.description}</div>
          <div>{this.state.details.contributed_by}</div>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
