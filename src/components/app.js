import React, { Component } from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './Navigation/Navigation-container';
import Home from './Pages/home';
import About from './Pages/about';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
            </Switch>
          </div>
        </Router>

        <h1>Braxton Newhall Portfolio</h1>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
        <PortfolioContainer />
      </div>
    );
  }
}