import React, { Component } from 'react';
import Banner from './partial/Banner'
import Showcase from './partial/Showcase'
import NPM from './partial/NPM'
import Features from './partial/Features'

class Homepage extends Component {
  render() {
    return (
      <div className="page">
        <Banner />
        <Features />
        <NPM />
        <Showcase />
      </div>
    );
  }
}

export default Homepage;
