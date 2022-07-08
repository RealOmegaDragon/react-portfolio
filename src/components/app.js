import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Braxton Newhall Portfolio</h1>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
        <PortfolioContainer />
      </div>
    );
  }
}
