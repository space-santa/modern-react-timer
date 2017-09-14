import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';
import Countdown from './Countdown';
import Timer from './Timer';

class Main extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <Switch>
              <Route path="/countdown" exact component={Countdown}/>
              <Route path="/timer" exact component={Timer}/>
              <Redirect to="/timer"/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
